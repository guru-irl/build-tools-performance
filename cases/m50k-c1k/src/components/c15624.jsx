import React from 'react';
const LABEL_15624 = 'component_15624';
export function Component15624({ value = 15624, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15624, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15624, 'data-value': derived.doubled }, children);
}
export default Component15624;
