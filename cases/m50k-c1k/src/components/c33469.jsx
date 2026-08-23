import React from 'react';
const LABEL_33469 = 'component_33469';
export function Component33469({ value = 33469, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33469, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33469, 'data-value': derived.doubled }, children);
}
export default Component33469;
