import React from 'react';
const LABEL_38857 = 'component_38857';
export function Component38857({ value = 38857, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38857, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38857, 'data-value': derived.doubled }, children);
}
export default Component38857;
