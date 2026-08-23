import React from 'react';
const LABEL_15331 = 'component_15331';
export function Component15331({ value = 15331, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15331, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15331, 'data-value': derived.doubled }, children);
}
export default Component15331;
