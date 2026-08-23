import React from 'react';
const LABEL_33580 = 'component_33580';
export function Component33580({ value = 33580, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33580, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33580, 'data-value': derived.doubled }, children);
}
export default Component33580;
