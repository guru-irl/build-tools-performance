import React from 'react';
const LABEL_42516 = 'component_42516';
export function Component42516({ value = 42516, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42516, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42516, 'data-value': derived.doubled }, children);
}
export default Component42516;
