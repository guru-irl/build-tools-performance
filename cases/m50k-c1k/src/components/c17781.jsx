import React from 'react';
const LABEL_17781 = 'component_17781';
export function Component17781({ value = 17781, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17781, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17781, 'data-value': derived.doubled }, children);
}
export default Component17781;
