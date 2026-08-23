import React from 'react';
const LABEL_12643 = 'component_12643';
export function Component12643({ value = 12643, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12643, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12643, 'data-value': derived.doubled }, children);
}
export default Component12643;
