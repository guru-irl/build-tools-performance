import React from 'react';
const LABEL_8342 = 'component_8342';
export function Component8342({ value = 8342, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8342, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8342, 'data-value': derived.doubled }, children);
}
export default Component8342;
