import React from 'react';
const LABEL_27448 = 'component_27448';
export function Component27448({ value = 27448, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_27448, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_27448, 'data-value': derived.doubled }, children);
}
export default Component27448;
