import React from 'react';
const LABEL_12705 = 'component_12705';
export function Component12705({ value = 12705, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12705, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12705, 'data-value': derived.doubled }, children);
}
export default Component12705;
