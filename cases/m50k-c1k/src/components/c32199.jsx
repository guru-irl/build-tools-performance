import React from 'react';
const LABEL_32199 = 'component_32199';
export function Component32199({ value = 32199, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32199, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32199, 'data-value': derived.doubled }, children);
}
export default Component32199;
