import React from 'react';
const LABEL_36216 = 'component_36216';
export function Component36216({ value = 36216, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36216, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36216, 'data-value': derived.doubled }, children);
}
export default Component36216;
