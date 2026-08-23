import React from 'react';
const LABEL_40092 = 'component_40092';
export function Component40092({ value = 40092, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40092, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40092, 'data-value': derived.doubled }, children);
}
export default Component40092;
