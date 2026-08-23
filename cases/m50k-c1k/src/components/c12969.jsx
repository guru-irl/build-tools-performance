import React from 'react';
const LABEL_12969 = 'component_12969';
export function Component12969({ value = 12969, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12969, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12969, 'data-value': derived.doubled }, children);
}
export default Component12969;
