import React from 'react';
const LABEL_29537 = 'component_29537';
export function Component29537({ value = 29537, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29537, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29537, 'data-value': derived.doubled }, children);
}
export default Component29537;
