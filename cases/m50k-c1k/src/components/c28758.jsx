import React from 'react';
const LABEL_28758 = 'component_28758';
export function Component28758({ value = 28758, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28758, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28758, 'data-value': derived.doubled }, children);
}
export default Component28758;
