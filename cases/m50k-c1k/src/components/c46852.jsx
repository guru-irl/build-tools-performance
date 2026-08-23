import React from 'react';
const LABEL_46852 = 'component_46852';
export function Component46852({ value = 46852, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46852, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46852, 'data-value': derived.doubled }, children);
}
export default Component46852;
