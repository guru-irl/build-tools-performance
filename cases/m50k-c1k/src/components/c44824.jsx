import React from 'react';
const LABEL_44824 = 'component_44824';
export function Component44824({ value = 44824, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44824, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44824, 'data-value': derived.doubled }, children);
}
export default Component44824;
