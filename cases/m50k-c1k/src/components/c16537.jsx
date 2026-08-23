import React from 'react';
const LABEL_16537 = 'component_16537';
export function Component16537({ value = 16537, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16537, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16537, 'data-value': derived.doubled }, children);
}
export default Component16537;
