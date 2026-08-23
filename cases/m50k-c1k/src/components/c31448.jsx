import React from 'react';
const LABEL_31448 = 'component_31448';
export function Component31448({ value = 31448, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31448, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31448, 'data-value': derived.doubled }, children);
}
export default Component31448;
