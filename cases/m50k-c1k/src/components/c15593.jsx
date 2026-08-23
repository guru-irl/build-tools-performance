import React from 'react';
const LABEL_15593 = 'component_15593';
export function Component15593({ value = 15593, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15593, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15593, 'data-value': derived.doubled }, children);
}
export default Component15593;
