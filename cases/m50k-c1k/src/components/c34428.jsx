import React from 'react';
const LABEL_34428 = 'component_34428';
export function Component34428({ value = 34428, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34428, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34428, 'data-value': derived.doubled }, children);
}
export default Component34428;
