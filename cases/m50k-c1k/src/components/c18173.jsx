import React from 'react';
const LABEL_18173 = 'component_18173';
export function Component18173({ value = 18173, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18173, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18173, 'data-value': derived.doubled }, children);
}
export default Component18173;
