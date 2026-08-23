import React from 'react';
const LABEL_23298 = 'component_23298';
export function Component23298({ value = 23298, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23298, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23298, 'data-value': derived.doubled }, children);
}
export default Component23298;
