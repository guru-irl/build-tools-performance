import React from 'react';
const LABEL_16667 = 'component_16667';
export function Component16667({ value = 16667, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16667, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16667, 'data-value': derived.doubled }, children);
}
export default Component16667;
