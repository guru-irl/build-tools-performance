import React from 'react';
const LABEL_8351 = 'component_8351';
export function Component8351({ value = 8351, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8351, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8351, 'data-value': derived.doubled }, children);
}
export default Component8351;
