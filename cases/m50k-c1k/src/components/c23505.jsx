import React from 'react';
const LABEL_23505 = 'component_23505';
export function Component23505({ value = 23505, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23505, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23505, 'data-value': derived.doubled }, children);
}
export default Component23505;
