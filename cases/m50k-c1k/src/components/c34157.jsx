import React from 'react';
const LABEL_34157 = 'component_34157';
export function Component34157({ value = 34157, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34157, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34157, 'data-value': derived.doubled }, children);
}
export default Component34157;
