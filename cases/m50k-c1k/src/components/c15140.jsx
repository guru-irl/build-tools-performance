import React from 'react';
const LABEL_15140 = 'component_15140';
export function Component15140({ value = 15140, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15140, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15140, 'data-value': derived.doubled }, children);
}
export default Component15140;
