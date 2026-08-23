import React from 'react';
const LABEL_31677 = 'component_31677';
export function Component31677({ value = 31677, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31677, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31677, 'data-value': derived.doubled }, children);
}
export default Component31677;
