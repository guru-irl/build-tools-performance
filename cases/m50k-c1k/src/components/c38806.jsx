import React from 'react';
const LABEL_38806 = 'component_38806';
export function Component38806({ value = 38806, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38806, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38806, 'data-value': derived.doubled }, children);
}
export default Component38806;
