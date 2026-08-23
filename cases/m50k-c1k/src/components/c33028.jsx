import React from 'react';
const LABEL_33028 = 'component_33028';
export function Component33028({ value = 33028, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33028, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33028, 'data-value': derived.doubled }, children);
}
export default Component33028;
