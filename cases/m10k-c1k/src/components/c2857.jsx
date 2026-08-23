import React from 'react';
const LABEL_2857 = 'component_2857';
export function Component2857({ value = 2857, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2857, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2857, 'data-value': derived.doubled }, children);
}
export default Component2857;
