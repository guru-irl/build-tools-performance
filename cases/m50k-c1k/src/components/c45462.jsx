import React from 'react';
const LABEL_45462 = 'component_45462';
export function Component45462({ value = 45462, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45462, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45462, 'data-value': derived.doubled }, children);
}
export default Component45462;
