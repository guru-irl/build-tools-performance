import React from 'react';
const LABEL_18792 = 'component_18792';
export function Component18792({ value = 18792, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18792, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18792, 'data-value': derived.doubled }, children);
}
export default Component18792;
