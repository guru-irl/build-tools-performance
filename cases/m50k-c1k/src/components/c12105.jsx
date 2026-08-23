import React from 'react';
const LABEL_12105 = 'component_12105';
export function Component12105({ value = 12105, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12105, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12105, 'data-value': derived.doubled }, children);
}
export default Component12105;
