import React from 'react';
const LABEL_22676 = 'component_22676';
export function Component22676({ value = 22676, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22676, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22676, 'data-value': derived.doubled }, children);
}
export default Component22676;
