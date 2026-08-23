import React from 'react';
const LABEL_12954 = 'component_12954';
export function Component12954({ value = 12954, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12954, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12954, 'data-value': derived.doubled }, children);
}
export default Component12954;
