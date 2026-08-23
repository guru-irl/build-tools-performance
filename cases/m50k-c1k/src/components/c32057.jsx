import React from 'react';
const LABEL_32057 = 'component_32057';
export function Component32057({ value = 32057, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32057, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32057, 'data-value': derived.doubled }, children);
}
export default Component32057;
