import React from 'react';
const LABEL_32508 = 'component_32508';
export function Component32508({ value = 32508, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32508, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32508, 'data-value': derived.doubled }, children);
}
export default Component32508;
