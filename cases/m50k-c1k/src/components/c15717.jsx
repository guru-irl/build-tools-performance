import React from 'react';
const LABEL_15717 = 'component_15717';
export function Component15717({ value = 15717, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15717, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15717, 'data-value': derived.doubled }, children);
}
export default Component15717;
