import React from 'react';
const LABEL_15327 = 'component_15327';
export function Component15327({ value = 15327, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15327, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15327, 'data-value': derived.doubled }, children);
}
export default Component15327;
