import React from 'react';
const LABEL_12597 = 'component_12597';
export function Component12597({ value = 12597, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12597, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12597, 'data-value': derived.doubled }, children);
}
export default Component12597;
