import React from 'react';
const LABEL_21686 = 'component_21686';
export function Component21686({ value = 21686, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21686, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21686, 'data-value': derived.doubled }, children);
}
export default Component21686;
