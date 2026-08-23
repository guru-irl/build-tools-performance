import React from 'react';
const LABEL_791 = 'component_791';
export function Component791({ value = 791, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_791, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_791, 'data-value': derived.doubled }, children);
}
export default Component791;
