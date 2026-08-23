import React from 'react';
const LABEL_33366 = 'component_33366';
export function Component33366({ value = 33366, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33366, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33366, 'data-value': derived.doubled }, children);
}
export default Component33366;
