import React from 'react';
const LABEL_12021 = 'component_12021';
export function Component12021({ value = 12021, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12021, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12021, 'data-value': derived.doubled }, children);
}
export default Component12021;
