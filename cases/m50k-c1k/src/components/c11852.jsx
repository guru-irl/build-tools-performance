import React from 'react';
const LABEL_11852 = 'component_11852';
export function Component11852({ value = 11852, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11852, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11852, 'data-value': derived.doubled }, children);
}
export default Component11852;
