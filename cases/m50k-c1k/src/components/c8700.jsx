import React from 'react';
const LABEL_8700 = 'component_8700';
export function Component8700({ value = 8700, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8700, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8700, 'data-value': derived.doubled }, children);
}
export default Component8700;
