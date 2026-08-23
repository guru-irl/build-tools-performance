import React from 'react';
const LABEL_8534 = 'component_8534';
export function Component8534({ value = 8534, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8534, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8534, 'data-value': derived.doubled }, children);
}
export default Component8534;
