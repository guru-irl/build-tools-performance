import React from 'react';
const LABEL_8827 = 'component_8827';
export function Component8827({ value = 8827, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8827, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8827, 'data-value': derived.doubled }, children);
}
export default Component8827;
