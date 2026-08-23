import React from 'react';
const LABEL_15325 = 'component_15325';
export function Component15325({ value = 15325, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15325, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15325, 'data-value': derived.doubled }, children);
}
export default Component15325;
