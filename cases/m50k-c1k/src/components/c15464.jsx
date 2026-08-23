import React from 'react';
const LABEL_15464 = 'component_15464';
export function Component15464({ value = 15464, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15464, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15464, 'data-value': derived.doubled }, children);
}
export default Component15464;
