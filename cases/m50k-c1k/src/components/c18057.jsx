import React from 'react';
const LABEL_18057 = 'component_18057';
export function Component18057({ value = 18057, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18057, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18057, 'data-value': derived.doubled }, children);
}
export default Component18057;
