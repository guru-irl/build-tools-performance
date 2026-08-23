import React from 'react';
const LABEL_12240 = 'component_12240';
export function Component12240({ value = 12240, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12240, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12240, 'data-value': derived.doubled }, children);
}
export default Component12240;
