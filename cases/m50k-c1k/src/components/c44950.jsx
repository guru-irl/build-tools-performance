import React from 'react';
const LABEL_44950 = 'component_44950';
export function Component44950({ value = 44950, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44950, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44950, 'data-value': derived.doubled }, children);
}
export default Component44950;
