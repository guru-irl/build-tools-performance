import React from 'react';
const LABEL_29483 = 'component_29483';
export function Component29483({ value = 29483, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29483, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29483, 'data-value': derived.doubled }, children);
}
export default Component29483;
