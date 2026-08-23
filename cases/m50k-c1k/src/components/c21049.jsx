import React from 'react';
const LABEL_21049 = 'component_21049';
export function Component21049({ value = 21049, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21049, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21049, 'data-value': derived.doubled }, children);
}
export default Component21049;
