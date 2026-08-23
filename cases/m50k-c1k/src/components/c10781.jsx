import React from 'react';
const LABEL_10781 = 'component_10781';
export function Component10781({ value = 10781, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10781, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10781, 'data-value': derived.doubled }, children);
}
export default Component10781;
