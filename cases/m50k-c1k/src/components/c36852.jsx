import React from 'react';
const LABEL_36852 = 'component_36852';
export function Component36852({ value = 36852, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36852, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36852, 'data-value': derived.doubled }, children);
}
export default Component36852;
