import React from 'react';
const LABEL_15196 = 'component_15196';
export function Component15196({ value = 15196, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15196, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15196, 'data-value': derived.doubled }, children);
}
export default Component15196;
