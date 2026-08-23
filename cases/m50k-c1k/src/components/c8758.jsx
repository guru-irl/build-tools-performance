import React from 'react';
const LABEL_8758 = 'component_8758';
export function Component8758({ value = 8758, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8758, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8758, 'data-value': derived.doubled }, children);
}
export default Component8758;
