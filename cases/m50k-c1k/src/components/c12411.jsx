import React from 'react';
const LABEL_12411 = 'component_12411';
export function Component12411({ value = 12411, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12411, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12411, 'data-value': derived.doubled }, children);
}
export default Component12411;
