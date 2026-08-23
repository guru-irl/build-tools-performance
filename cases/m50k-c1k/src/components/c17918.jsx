import React from 'react';
const LABEL_17918 = 'component_17918';
export function Component17918({ value = 17918, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17918, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17918, 'data-value': derived.doubled }, children);
}
export default Component17918;
