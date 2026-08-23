import React from 'react';
const LABEL_33877 = 'component_33877';
export function Component33877({ value = 33877, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33877, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33877, 'data-value': derived.doubled }, children);
}
export default Component33877;
