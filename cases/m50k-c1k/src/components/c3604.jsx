import React from 'react';
const LABEL_3604 = 'component_3604';
export function Component3604({ value = 3604, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3604, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3604, 'data-value': derived.doubled }, children);
}
export default Component3604;
