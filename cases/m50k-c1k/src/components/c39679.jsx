import React from 'react';
const LABEL_39679 = 'component_39679';
export function Component39679({ value = 39679, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39679, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39679, 'data-value': derived.doubled }, children);
}
export default Component39679;
