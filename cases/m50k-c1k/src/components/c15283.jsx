import React from 'react';
const LABEL_15283 = 'component_15283';
export function Component15283({ value = 15283, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15283, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15283, 'data-value': derived.doubled }, children);
}
export default Component15283;
