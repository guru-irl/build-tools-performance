import React from 'react';
const LABEL_21100 = 'component_21100';
export function Component21100({ value = 21100, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21100, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21100, 'data-value': derived.doubled }, children);
}
export default Component21100;
