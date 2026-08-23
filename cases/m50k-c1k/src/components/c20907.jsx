import React from 'react';
const LABEL_20907 = 'component_20907';
export function Component20907({ value = 20907, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20907, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20907, 'data-value': derived.doubled }, children);
}
export default Component20907;
