import React from 'react';
const LABEL_32852 = 'component_32852';
export function Component32852({ value = 32852, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32852, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32852, 'data-value': derived.doubled }, children);
}
export default Component32852;
