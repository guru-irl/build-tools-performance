import React from 'react';
const LABEL_21077 = 'component_21077';
export function Component21077({ value = 21077, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21077, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21077, 'data-value': derived.doubled }, children);
}
export default Component21077;
