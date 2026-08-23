import React from 'react';
const LABEL_25386 = 'component_25386';
export function Component25386({ value = 25386, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25386, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25386, 'data-value': derived.doubled }, children);
}
export default Component25386;
