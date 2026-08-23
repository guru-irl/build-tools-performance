import React from 'react';
const LABEL_12330 = 'component_12330';
export function Component12330({ value = 12330, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12330, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12330, 'data-value': derived.doubled }, children);
}
export default Component12330;
