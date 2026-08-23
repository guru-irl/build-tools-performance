import React from 'react';
const LABEL_17927 = 'component_17927';
export function Component17927({ value = 17927, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17927, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17927, 'data-value': derived.doubled }, children);
}
export default Component17927;
