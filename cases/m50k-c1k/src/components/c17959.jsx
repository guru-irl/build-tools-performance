import React from 'react';
const LABEL_17959 = 'component_17959';
export function Component17959({ value = 17959, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17959, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17959, 'data-value': derived.doubled }, children);
}
export default Component17959;
