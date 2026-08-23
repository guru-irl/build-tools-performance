import React from 'react';
const LABEL_12858 = 'component_12858';
export function Component12858({ value = 12858, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12858, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12858, 'data-value': derived.doubled }, children);
}
export default Component12858;
