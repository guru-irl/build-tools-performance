import React from 'react';
const LABEL_3057 = 'component_3057';
export function Component3057({ value = 3057, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3057, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3057, 'data-value': derived.doubled }, children);
}
export default Component3057;
