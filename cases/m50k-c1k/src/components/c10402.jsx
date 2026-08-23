import React from 'react';
const LABEL_10402 = 'component_10402';
export function Component10402({ value = 10402, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10402, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10402, 'data-value': derived.doubled }, children);
}
export default Component10402;
