import React from 'react';
const LABEL_20852 = 'component_20852';
export function Component20852({ value = 20852, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20852, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20852, 'data-value': derived.doubled }, children);
}
export default Component20852;
