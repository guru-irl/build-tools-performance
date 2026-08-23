import React from 'react';
const LABEL_45254 = 'component_45254';
export function Component45254({ value = 45254, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45254, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45254, 'data-value': derived.doubled }, children);
}
export default Component45254;
