import React from 'react';
const LABEL_12869 = 'component_12869';
export function Component12869({ value = 12869, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12869, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12869, 'data-value': derived.doubled }, children);
}
export default Component12869;
