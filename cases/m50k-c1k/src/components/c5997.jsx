import React from 'react';
const LABEL_5997 = 'component_5997';
export function Component5997({ value = 5997, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5997, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5997, 'data-value': derived.doubled }, children);
}
export default Component5997;
