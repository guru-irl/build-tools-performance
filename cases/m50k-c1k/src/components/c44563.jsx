import React from 'react';
const LABEL_44563 = 'component_44563';
export function Component44563({ value = 44563, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44563, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44563, 'data-value': derived.doubled }, children);
}
export default Component44563;
