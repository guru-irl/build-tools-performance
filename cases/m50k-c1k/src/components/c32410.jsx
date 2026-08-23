import React from 'react';
const LABEL_32410 = 'component_32410';
export function Component32410({ value = 32410, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32410, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32410, 'data-value': derived.doubled }, children);
}
export default Component32410;
