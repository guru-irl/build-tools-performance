import React from 'react';
const LABEL_12546 = 'component_12546';
export function Component12546({ value = 12546, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12546, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12546, 'data-value': derived.doubled }, children);
}
export default Component12546;
