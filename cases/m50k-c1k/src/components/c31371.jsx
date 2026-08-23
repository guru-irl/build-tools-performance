import React from 'react';
const LABEL_31371 = 'component_31371';
export function Component31371({ value = 31371, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31371, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31371, 'data-value': derived.doubled }, children);
}
export default Component31371;
