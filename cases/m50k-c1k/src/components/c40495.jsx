import React from 'react';
const LABEL_40495 = 'component_40495';
export function Component40495({ value = 40495, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40495, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40495, 'data-value': derived.doubled }, children);
}
export default Component40495;
