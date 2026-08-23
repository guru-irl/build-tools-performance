import React from 'react';
const LABEL_16057 = 'component_16057';
export function Component16057({ value = 16057, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16057, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16057, 'data-value': derived.doubled }, children);
}
export default Component16057;
