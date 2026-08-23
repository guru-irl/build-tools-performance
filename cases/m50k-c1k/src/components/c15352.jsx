import React from 'react';
const LABEL_15352 = 'component_15352';
export function Component15352({ value = 15352, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15352, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15352, 'data-value': derived.doubled }, children);
}
export default Component15352;
