import React from 'react';
const LABEL_17440 = 'component_17440';
export function Component17440({ value = 17440, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17440, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17440, 'data-value': derived.doubled }, children);
}
export default Component17440;
