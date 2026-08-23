import React from 'react';
const LABEL_17728 = 'component_17728';
export function Component17728({ value = 17728, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17728, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17728, 'data-value': derived.doubled }, children);
}
export default Component17728;
