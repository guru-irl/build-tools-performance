import React from 'react';
const LABEL_10700 = 'component_10700';
export function Component10700({ value = 10700, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10700, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10700, 'data-value': derived.doubled }, children);
}
export default Component10700;
