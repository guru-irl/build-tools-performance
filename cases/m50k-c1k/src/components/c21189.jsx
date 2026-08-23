import React from 'react';
const LABEL_21189 = 'component_21189';
export function Component21189({ value = 21189, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21189, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21189, 'data-value': derived.doubled }, children);
}
export default Component21189;
