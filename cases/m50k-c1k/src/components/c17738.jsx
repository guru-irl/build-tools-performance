import React from 'react';
const LABEL_17738 = 'component_17738';
export function Component17738({ value = 17738, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17738, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17738, 'data-value': derived.doubled }, children);
}
export default Component17738;
