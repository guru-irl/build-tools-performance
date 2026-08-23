import React from 'react';
const LABEL_12652 = 'component_12652';
export function Component12652({ value = 12652, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12652, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12652, 'data-value': derived.doubled }, children);
}
export default Component12652;
