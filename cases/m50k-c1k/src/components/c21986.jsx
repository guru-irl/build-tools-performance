import React from 'react';
const LABEL_21986 = 'component_21986';
export function Component21986({ value = 21986, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21986, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21986, 'data-value': derived.doubled }, children);
}
export default Component21986;
