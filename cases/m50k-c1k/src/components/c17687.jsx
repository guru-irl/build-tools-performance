import React from 'react';
const LABEL_17687 = 'component_17687';
export function Component17687({ value = 17687, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17687, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17687, 'data-value': derived.doubled }, children);
}
export default Component17687;
