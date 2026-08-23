import React from 'react';
const LABEL_12177 = 'component_12177';
export function Component12177({ value = 12177, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12177, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12177, 'data-value': derived.doubled }, children);
}
export default Component12177;
