import React from 'react';
const LABEL_29387 = 'component_29387';
export function Component29387({ value = 29387, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29387, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29387, 'data-value': derived.doubled }, children);
}
export default Component29387;
