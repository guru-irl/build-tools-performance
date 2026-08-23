import React from 'react';
const LABEL_366 = 'component_366';
export function Component366({ value = 366, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_366, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_366, 'data-value': derived.doubled }, children);
}
export default Component366;
