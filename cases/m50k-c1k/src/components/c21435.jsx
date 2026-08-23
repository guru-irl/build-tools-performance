import React from 'react';
const LABEL_21435 = 'component_21435';
export function Component21435({ value = 21435, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21435, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21435, 'data-value': derived.doubled }, children);
}
export default Component21435;
