import React from 'react';
const LABEL_22554 = 'component_22554';
export function Component22554({ value = 22554, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22554, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22554, 'data-value': derived.doubled }, children);
}
export default Component22554;
