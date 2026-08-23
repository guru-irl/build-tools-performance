import React from 'react';
const LABEL_2517 = 'component_2517';
export function Component2517({ value = 2517, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2517, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2517, 'data-value': derived.doubled }, children);
}
export default Component2517;
