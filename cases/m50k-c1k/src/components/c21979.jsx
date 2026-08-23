import React from 'react';
const LABEL_21979 = 'component_21979';
export function Component21979({ value = 21979, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21979, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21979, 'data-value': derived.doubled }, children);
}
export default Component21979;
