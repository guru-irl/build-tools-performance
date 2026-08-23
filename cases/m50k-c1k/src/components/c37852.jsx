import React from 'react';
const LABEL_37852 = 'component_37852';
export function Component37852({ value = 37852, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37852, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37852, 'data-value': derived.doubled }, children);
}
export default Component37852;
