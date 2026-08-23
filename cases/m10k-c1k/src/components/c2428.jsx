import React from 'react';
const LABEL_2428 = 'component_2428';
export function Component2428({ value = 2428, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2428, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2428, 'data-value': derived.doubled }, children);
}
export default Component2428;
