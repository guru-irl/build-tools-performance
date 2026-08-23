import React from 'react';
const LABEL_6852 = 'component_6852';
export function Component6852({ value = 6852, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6852, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6852, 'data-value': derived.doubled }, children);
}
export default Component6852;
