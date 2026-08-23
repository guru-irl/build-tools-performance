import React from 'react';
const LABEL_42092 = 'component_42092';
export function Component42092({ value = 42092, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42092, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42092, 'data-value': derived.doubled }, children);
}
export default Component42092;
