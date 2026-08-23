import React from 'react';
const LABEL_6537 = 'component_6537';
export function Component6537({ value = 6537, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6537, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6537, 'data-value': derived.doubled }, children);
}
export default Component6537;
