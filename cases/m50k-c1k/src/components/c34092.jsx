import React from 'react';
const LABEL_34092 = 'component_34092';
export function Component34092({ value = 34092, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34092, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34092, 'data-value': derived.doubled }, children);
}
export default Component34092;
