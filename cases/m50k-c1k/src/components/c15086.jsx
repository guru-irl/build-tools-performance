import React from 'react';
const LABEL_15086 = 'component_15086';
export function Component15086({ value = 15086, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15086, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15086, 'data-value': derived.doubled }, children);
}
export default Component15086;
