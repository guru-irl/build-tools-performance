import React from 'react';
const LABEL_8301 = 'component_8301';
export function Component8301({ value = 8301, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8301, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8301, 'data-value': derived.doubled }, children);
}
export default Component8301;
