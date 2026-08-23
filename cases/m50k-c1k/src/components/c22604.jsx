import React from 'react';
const LABEL_22604 = 'component_22604';
export function Component22604({ value = 22604, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22604, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22604, 'data-value': derived.doubled }, children);
}
export default Component22604;
