import React from 'react';
const LABEL_12984 = 'component_12984';
export function Component12984({ value = 12984, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12984, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12984, 'data-value': derived.doubled }, children);
}
export default Component12984;
