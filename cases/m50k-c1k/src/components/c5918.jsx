import React from 'react';
const LABEL_5918 = 'component_5918';
export function Component5918({ value = 5918, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5918, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5918, 'data-value': derived.doubled }, children);
}
export default Component5918;
