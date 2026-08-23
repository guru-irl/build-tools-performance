import React from 'react';
const LABEL_21682 = 'component_21682';
export function Component21682({ value = 21682, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21682, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21682, 'data-value': derived.doubled }, children);
}
export default Component21682;
