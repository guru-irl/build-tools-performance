import React from 'react';
const LABEL_21347 = 'component_21347';
export function Component21347({ value = 21347, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21347, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21347, 'data-value': derived.doubled }, children);
}
export default Component21347;
