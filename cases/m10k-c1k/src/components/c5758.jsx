import React from 'react';
const LABEL_5758 = 'component_5758';
export function Component5758({ value = 5758, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5758, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5758, 'data-value': derived.doubled }, children);
}
export default Component5758;
