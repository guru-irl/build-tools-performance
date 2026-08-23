import React from 'react';
const LABEL_22516 = 'component_22516';
export function Component22516({ value = 22516, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22516, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22516, 'data-value': derived.doubled }, children);
}
export default Component22516;
