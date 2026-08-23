import React from 'react';
const LABEL_33196 = 'component_33196';
export function Component33196({ value = 33196, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33196, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33196, 'data-value': derived.doubled }, children);
}
export default Component33196;
