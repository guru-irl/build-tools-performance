import React from 'react';
const LABEL_8437 = 'component_8437';
export function Component8437({ value = 8437, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8437, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8437, 'data-value': derived.doubled }, children);
}
export default Component8437;
