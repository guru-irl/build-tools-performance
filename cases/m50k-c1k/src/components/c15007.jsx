import React from 'react';
const LABEL_15007 = 'component_15007';
export function Component15007({ value = 15007, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15007, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15007, 'data-value': derived.doubled }, children);
}
export default Component15007;
