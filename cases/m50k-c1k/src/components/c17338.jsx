import React from 'react';
const LABEL_17338 = 'component_17338';
export function Component17338({ value = 17338, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17338, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17338, 'data-value': derived.doubled }, children);
}
export default Component17338;
