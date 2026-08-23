import React from 'react';
const LABEL_21956 = 'component_21956';
export function Component21956({ value = 21956, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21956, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21956, 'data-value': derived.doubled }, children);
}
export default Component21956;
