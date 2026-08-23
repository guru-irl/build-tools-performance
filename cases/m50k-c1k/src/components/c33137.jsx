import React from 'react';
const LABEL_33137 = 'component_33137';
export function Component33137({ value = 33137, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33137, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33137, 'data-value': derived.doubled }, children);
}
export default Component33137;
