import React from 'react';
const LABEL_3852 = 'component_3852';
export function Component3852({ value = 3852, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3852, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3852, 'data-value': derived.doubled }, children);
}
export default Component3852;
