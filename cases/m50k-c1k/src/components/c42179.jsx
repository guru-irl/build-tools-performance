import React from 'react';
const LABEL_42179 = 'component_42179';
export function Component42179({ value = 42179, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42179, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42179, 'data-value': derived.doubled }, children);
}
export default Component42179;
