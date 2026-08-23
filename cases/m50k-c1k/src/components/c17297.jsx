import React from 'react';
const LABEL_17297 = 'component_17297';
export function Component17297({ value = 17297, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17297, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17297, 'data-value': derived.doubled }, children);
}
export default Component17297;
