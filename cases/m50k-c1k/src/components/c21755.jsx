import React from 'react';
const LABEL_21755 = 'component_21755';
export function Component21755({ value = 21755, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21755, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21755, 'data-value': derived.doubled }, children);
}
export default Component21755;
