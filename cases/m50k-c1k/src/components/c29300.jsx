import React from 'react';
const LABEL_29300 = 'component_29300';
export function Component29300({ value = 29300, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29300, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29300, 'data-value': derived.doubled }, children);
}
export default Component29300;
