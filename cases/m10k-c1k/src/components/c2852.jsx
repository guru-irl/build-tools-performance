import React from 'react';
const LABEL_2852 = 'component_2852';
export function Component2852({ value = 2852, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2852, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2852, 'data-value': derived.doubled }, children);
}
export default Component2852;
