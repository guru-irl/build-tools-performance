import React from 'react';
const LABEL_26007 = 'component_26007';
export function Component26007({ value = 26007, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26007, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26007, 'data-value': derived.doubled }, children);
}
export default Component26007;
