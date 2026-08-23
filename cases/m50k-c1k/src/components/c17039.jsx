import React from 'react';
const LABEL_17039 = 'component_17039';
export function Component17039({ value = 17039, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17039, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17039, 'data-value': derived.doubled }, children);
}
export default Component17039;
