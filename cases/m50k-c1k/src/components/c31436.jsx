import React from 'react';
const LABEL_31436 = 'component_31436';
export function Component31436({ value = 31436, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31436, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31436, 'data-value': derived.doubled }, children);
}
export default Component31436;
