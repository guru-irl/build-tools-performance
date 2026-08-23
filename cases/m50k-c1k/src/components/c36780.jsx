import React from 'react';
const LABEL_36780 = 'component_36780';
export function Component36780({ value = 36780, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36780, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36780, 'data-value': derived.doubled }, children);
}
export default Component36780;
