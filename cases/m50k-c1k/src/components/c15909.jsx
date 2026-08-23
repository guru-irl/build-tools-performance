import React from 'react';
const LABEL_15909 = 'component_15909';
export function Component15909({ value = 15909, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15909, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15909, 'data-value': derived.doubled }, children);
}
export default Component15909;
