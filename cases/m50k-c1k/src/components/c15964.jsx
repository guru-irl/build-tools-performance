import React from 'react';
const LABEL_15964 = 'component_15964';
export function Component15964({ value = 15964, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15964, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15964, 'data-value': derived.doubled }, children);
}
export default Component15964;
