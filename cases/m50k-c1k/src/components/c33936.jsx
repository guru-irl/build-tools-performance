import React from 'react';
const LABEL_33936 = 'component_33936';
export function Component33936({ value = 33936, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33936, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33936, 'data-value': derived.doubled }, children);
}
export default Component33936;
