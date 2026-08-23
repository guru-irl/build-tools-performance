import React from 'react';
const LABEL_35857 = 'component_35857';
export function Component35857({ value = 35857, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35857, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35857, 'data-value': derived.doubled }, children);
}
export default Component35857;
