import React from 'react';
const LABEL_8454 = 'component_8454';
export function Component8454({ value = 8454, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8454, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8454, 'data-value': derived.doubled }, children);
}
export default Component8454;
