import React from 'react';
const LABEL_17962 = 'component_17962';
export function Component17962({ value = 17962, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17962, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17962, 'data-value': derived.doubled }, children);
}
export default Component17962;
