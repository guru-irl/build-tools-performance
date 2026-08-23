import React from 'react';
const LABEL_42438 = 'component_42438';
export function Component42438({ value = 42438, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42438, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42438, 'data-value': derived.doubled }, children);
}
export default Component42438;
