import React from 'react';
const LABEL_11354 = 'component_11354';
export function Component11354({ value = 11354, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11354, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11354, 'data-value': derived.doubled }, children);
}
export default Component11354;
