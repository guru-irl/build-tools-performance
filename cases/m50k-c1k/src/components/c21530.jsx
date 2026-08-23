import React from 'react';
const LABEL_21530 = 'component_21530';
export function Component21530({ value = 21530, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21530, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21530, 'data-value': derived.doubled }, children);
}
export default Component21530;
