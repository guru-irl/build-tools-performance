import React from 'react';
const LABEL_464 = 'component_464';
export function Component464({ value = 464, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_464, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_464, 'data-value': derived.doubled }, children);
}
export default Component464;
