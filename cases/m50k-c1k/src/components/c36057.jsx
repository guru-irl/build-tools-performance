import React from 'react';
const LABEL_36057 = 'component_36057';
export function Component36057({ value = 36057, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36057, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36057, 'data-value': derived.doubled }, children);
}
export default Component36057;
