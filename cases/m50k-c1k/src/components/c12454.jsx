import React from 'react';
const LABEL_12454 = 'component_12454';
export function Component12454({ value = 12454, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12454, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12454, 'data-value': derived.doubled }, children);
}
export default Component12454;
