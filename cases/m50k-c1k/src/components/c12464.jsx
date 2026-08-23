import React from 'react';
const LABEL_12464 = 'component_12464';
export function Component12464({ value = 12464, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12464, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12464, 'data-value': derived.doubled }, children);
}
export default Component12464;
