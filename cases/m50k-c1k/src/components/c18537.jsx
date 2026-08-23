import React from 'react';
const LABEL_18537 = 'component_18537';
export function Component18537({ value = 18537, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18537, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18537, 'data-value': derived.doubled }, children);
}
export default Component18537;
