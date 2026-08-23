import React from 'react';
const LABEL_1563 = 'component_1563';
export function Component1563({ value = 1563, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1563, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1563, 'data-value': derived.doubled }, children);
}
export default Component1563;
