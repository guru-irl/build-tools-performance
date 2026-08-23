import React from 'react';
const LABEL_407 = 'component_407';
export function Component407({ value = 407, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_407, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_407, 'data-value': derived.doubled }, children);
}
export default Component407;
