import React from 'react';
const LABEL_178 = 'component_178';
export function Component178({ value = 178, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_178, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_178, 'data-value': derived.doubled }, children);
}
export default Component178;
