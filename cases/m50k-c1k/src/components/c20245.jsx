import React from 'react';
const LABEL_20245 = 'component_20245';
export function Component20245({ value = 20245, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20245, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20245, 'data-value': derived.doubled }, children);
}
export default Component20245;
