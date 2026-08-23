import React from 'react';
const LABEL_24751 = 'component_24751';
export function Component24751({ value = 24751, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24751, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24751, 'data-value': derived.doubled }, children);
}
export default Component24751;
