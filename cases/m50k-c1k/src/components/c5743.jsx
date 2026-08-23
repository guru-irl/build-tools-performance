import React from 'react';
const LABEL_5743 = 'component_5743';
export function Component5743({ value = 5743, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5743, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5743, 'data-value': derived.doubled }, children);
}
export default Component5743;
