import React from 'react';
const LABEL_6517 = 'component_6517';
export function Component6517({ value = 6517, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6517, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6517, 'data-value': derived.doubled }, children);
}
export default Component6517;
