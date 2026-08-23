import React from 'react';
const LABEL_40758 = 'component_40758';
export function Component40758({ value = 40758, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40758, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40758, 'data-value': derived.doubled }, children);
}
export default Component40758;
