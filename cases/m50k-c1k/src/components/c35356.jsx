import React from 'react';
const LABEL_35356 = 'component_35356';
export function Component35356({ value = 35356, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35356, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35356, 'data-value': derived.doubled }, children);
}
export default Component35356;
