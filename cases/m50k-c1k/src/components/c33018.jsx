import React from 'react';
const LABEL_33018 = 'component_33018';
export function Component33018({ value = 33018, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33018, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33018, 'data-value': derived.doubled }, children);
}
export default Component33018;
