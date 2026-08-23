import React from 'react';
const LABEL_12147 = 'component_12147';
export function Component12147({ value = 12147, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12147, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12147, 'data-value': derived.doubled }, children);
}
export default Component12147;
