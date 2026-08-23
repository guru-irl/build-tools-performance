import React from 'react';
const LABEL_25751 = 'component_25751';
export function Component25751({ value = 25751, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25751, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25751, 'data-value': derived.doubled }, children);
}
export default Component25751;
