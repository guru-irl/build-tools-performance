import React from 'react';
const LABEL_38240 = 'component_38240';
export function Component38240({ value = 38240, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38240, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38240, 'data-value': derived.doubled }, children);
}
export default Component38240;
