import React from 'react';
const LABEL_39852 = 'component_39852';
export function Component39852({ value = 39852, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39852, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39852, 'data-value': derived.doubled }, children);
}
export default Component39852;
