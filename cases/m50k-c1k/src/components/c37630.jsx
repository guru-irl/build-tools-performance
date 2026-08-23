import React from 'react';
const LABEL_37630 = 'component_37630';
export function Component37630({ value = 37630, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37630, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37630, 'data-value': derived.doubled }, children);
}
export default Component37630;
