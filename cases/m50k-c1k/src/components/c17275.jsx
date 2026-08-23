import React from 'react';
const LABEL_17275 = 'component_17275';
export function Component17275({ value = 17275, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17275, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17275, 'data-value': derived.doubled }, children);
}
export default Component17275;
