import React from 'react';
const LABEL_23537 = 'component_23537';
export function Component23537({ value = 23537, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23537, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23537, 'data-value': derived.doubled }, children);
}
export default Component23537;
