import React from 'react';
const LABEL_3563 = 'component_3563';
export function Component3563({ value = 3563, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3563, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3563, 'data-value': derived.doubled }, children);
}
export default Component3563;
