import React from 'react';
const LABEL_42594 = 'component_42594';
export function Component42594({ value = 42594, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42594, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42594, 'data-value': derived.doubled }, children);
}
export default Component42594;
