import React from 'react';
const LABEL_26576 = 'component_26576';
export function Component26576({ value = 26576, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26576, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26576, 'data-value': derived.doubled }, children);
}
export default Component26576;
