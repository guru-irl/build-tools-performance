import React from 'react';
const LABEL_8601 = 'component_8601';
export function Component8601({ value = 8601, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8601, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8601, 'data-value': derived.doubled }, children);
}
export default Component8601;
