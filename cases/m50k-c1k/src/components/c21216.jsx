import React from 'react';
const LABEL_21216 = 'component_21216';
export function Component21216({ value = 21216, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21216, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21216, 'data-value': derived.doubled }, children);
}
export default Component21216;
