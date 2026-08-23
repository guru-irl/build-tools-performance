import React from 'react';
const LABEL_20857 = 'component_20857';
export function Component20857({ value = 20857, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20857, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20857, 'data-value': derived.doubled }, children);
}
export default Component20857;
