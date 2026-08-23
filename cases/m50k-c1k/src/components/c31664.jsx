import React from 'react';
const LABEL_31664 = 'component_31664';
export function Component31664({ value = 31664, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31664, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31664, 'data-value': derived.doubled }, children);
}
export default Component31664;
