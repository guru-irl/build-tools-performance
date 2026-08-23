import React from 'react';
const LABEL_32078 = 'component_32078';
export function Component32078({ value = 32078, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32078, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32078, 'data-value': derived.doubled }, children);
}
export default Component32078;
