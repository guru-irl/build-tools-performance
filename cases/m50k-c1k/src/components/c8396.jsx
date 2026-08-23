import React from 'react';
const LABEL_8396 = 'component_8396';
export function Component8396({ value = 8396, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8396, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8396, 'data-value': derived.doubled }, children);
}
export default Component8396;
