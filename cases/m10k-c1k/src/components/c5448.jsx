import React from 'react';
const LABEL_5448 = 'component_5448';
export function Component5448({ value = 5448, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5448, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5448, 'data-value': derived.doubled }, children);
}
export default Component5448;
