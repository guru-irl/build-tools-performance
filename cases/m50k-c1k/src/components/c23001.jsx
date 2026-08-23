import React from 'react';
const LABEL_23001 = 'component_23001';
export function Component23001({ value = 23001, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23001, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23001, 'data-value': derived.doubled }, children);
}
export default Component23001;
