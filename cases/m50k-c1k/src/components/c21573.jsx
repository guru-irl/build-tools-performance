import React from 'react';
const LABEL_21573 = 'component_21573';
export function Component21573({ value = 21573, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21573, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21573, 'data-value': derived.doubled }, children);
}
export default Component21573;
