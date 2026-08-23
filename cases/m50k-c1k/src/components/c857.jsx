import React from 'react';
const LABEL_857 = 'component_857';
export function Component857({ value = 857, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_857, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_857, 'data-value': derived.doubled }, children);
}
export default Component857;
