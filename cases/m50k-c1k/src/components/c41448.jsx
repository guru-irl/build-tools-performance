import React from 'react';
const LABEL_41448 = 'component_41448';
export function Component41448({ value = 41448, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41448, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41448, 'data-value': derived.doubled }, children);
}
export default Component41448;
