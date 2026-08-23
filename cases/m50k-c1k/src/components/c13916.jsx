import React from 'react';
const LABEL_13916 = 'component_13916';
export function Component13916({ value = 13916, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13916, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13916, 'data-value': derived.doubled }, children);
}
export default Component13916;
