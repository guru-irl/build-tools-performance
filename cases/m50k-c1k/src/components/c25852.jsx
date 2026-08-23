import React from 'react';
const LABEL_25852 = 'component_25852';
export function Component25852({ value = 25852, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25852, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25852, 'data-value': derived.doubled }, children);
}
export default Component25852;
