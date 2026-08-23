import React from 'react';
const LABEL_10421 = 'component_10421';
export function Component10421({ value = 10421, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10421, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10421, 'data-value': derived.doubled }, children);
}
export default Component10421;
