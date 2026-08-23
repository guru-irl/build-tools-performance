import React from 'react';
const LABEL_10901 = 'component_10901';
export function Component10901({ value = 10901, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10901, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10901, 'data-value': derived.doubled }, children);
}
export default Component10901;
