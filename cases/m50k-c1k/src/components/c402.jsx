import React from 'react';
const LABEL_402 = 'component_402';
export function Component402({ value = 402, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_402, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_402, 'data-value': derived.doubled }, children);
}
export default Component402;
