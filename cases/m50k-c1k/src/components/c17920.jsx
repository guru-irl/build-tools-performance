import React from 'react';
const LABEL_17920 = 'component_17920';
export function Component17920({ value = 17920, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17920, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17920, 'data-value': derived.doubled }, children);
}
export default Component17920;
