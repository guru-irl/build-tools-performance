import React from 'react';
const LABEL_15860 = 'component_15860';
export function Component15860({ value = 15860, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15860, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15860, 'data-value': derived.doubled }, children);
}
export default Component15860;
