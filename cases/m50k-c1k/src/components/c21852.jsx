import React from 'react';
const LABEL_21852 = 'component_21852';
export function Component21852({ value = 21852, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21852, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21852, 'data-value': derived.doubled }, children);
}
export default Component21852;
