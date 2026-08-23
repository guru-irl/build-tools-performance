import React from 'react';
const LABEL_21524 = 'component_21524';
export function Component21524({ value = 21524, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21524, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21524, 'data-value': derived.doubled }, children);
}
export default Component21524;
