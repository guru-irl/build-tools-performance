import React from 'react';
const LABEL_8111 = 'component_8111';
export function Component8111({ value = 8111, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8111, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8111, 'data-value': derived.doubled }, children);
}
export default Component8111;
