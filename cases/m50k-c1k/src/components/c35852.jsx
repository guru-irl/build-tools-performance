import React from 'react';
const LABEL_35852 = 'component_35852';
export function Component35852({ value = 35852, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35852, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35852, 'data-value': derived.doubled }, children);
}
export default Component35852;
