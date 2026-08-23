import React from 'react';
const LABEL_45884 = 'component_45884';
export function Component45884({ value = 45884, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45884, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45884, 'data-value': derived.doubled }, children);
}
export default Component45884;
