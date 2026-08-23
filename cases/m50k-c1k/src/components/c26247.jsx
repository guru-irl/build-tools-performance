import React from 'react';
const LABEL_26247 = 'component_26247';
export function Component26247({ value = 26247, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26247, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26247, 'data-value': derived.doubled }, children);
}
export default Component26247;
