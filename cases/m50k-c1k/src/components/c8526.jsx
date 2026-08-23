import React from 'react';
const LABEL_8526 = 'component_8526';
export function Component8526({ value = 8526, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8526, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8526, 'data-value': derived.doubled }, children);
}
export default Component8526;
