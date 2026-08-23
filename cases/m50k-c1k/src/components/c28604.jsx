import React from 'react';
const LABEL_28604 = 'component_28604';
export function Component28604({ value = 28604, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28604, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28604, 'data-value': derived.doubled }, children);
}
export default Component28604;
