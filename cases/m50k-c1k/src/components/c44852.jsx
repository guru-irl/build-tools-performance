import React from 'react';
const LABEL_44852 = 'component_44852';
export function Component44852({ value = 44852, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44852, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44852, 'data-value': derived.doubled }, children);
}
export default Component44852;
