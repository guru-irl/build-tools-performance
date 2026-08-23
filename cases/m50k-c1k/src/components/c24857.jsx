import React from 'react';
const LABEL_24857 = 'component_24857';
export function Component24857({ value = 24857, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24857, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24857, 'data-value': derived.doubled }, children);
}
export default Component24857;
