import React from 'react';
const LABEL_34057 = 'component_34057';
export function Component34057({ value = 34057, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34057, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34057, 'data-value': derived.doubled }, children);
}
export default Component34057;
