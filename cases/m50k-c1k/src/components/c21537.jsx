import React from 'react';
const LABEL_21537 = 'component_21537';
export function Component21537({ value = 21537, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21537, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21537, 'data-value': derived.doubled }, children);
}
export default Component21537;
