import React from 'react';
const LABEL_12128 = 'component_12128';
export function Component12128({ value = 12128, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12128, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12128, 'data-value': derived.doubled }, children);
}
export default Component12128;
