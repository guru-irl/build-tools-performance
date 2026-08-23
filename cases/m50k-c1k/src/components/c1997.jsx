import React from 'react';
const LABEL_1997 = 'component_1997';
export function Component1997({ value = 1997, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1997, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1997, 'data-value': derived.doubled }, children);
}
export default Component1997;
