import React from 'react';
const LABEL_23017 = 'component_23017';
export function Component23017({ value = 23017, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23017, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23017, 'data-value': derived.doubled }, children);
}
export default Component23017;
