import React from 'react';
const LABEL_29630 = 'component_29630';
export function Component29630({ value = 29630, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29630, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29630, 'data-value': derived.doubled }, children);
}
export default Component29630;
