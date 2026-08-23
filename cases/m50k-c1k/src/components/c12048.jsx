import React from 'react';
const LABEL_12048 = 'component_12048';
export function Component12048({ value = 12048, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12048, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12048, 'data-value': derived.doubled }, children);
}
export default Component12048;
