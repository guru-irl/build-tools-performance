import React from 'react';
const LABEL_445 = 'component_445';
export function Component445({ value = 445, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_445, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_445, 'data-value': derived.doubled }, children);
}
export default Component445;
