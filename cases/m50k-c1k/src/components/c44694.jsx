import React from 'react';
const LABEL_44694 = 'component_44694';
export function Component44694({ value = 44694, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44694, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44694, 'data-value': derived.doubled }, children);
}
export default Component44694;
