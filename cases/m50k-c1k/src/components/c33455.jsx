import React from 'react';
const LABEL_33455 = 'component_33455';
export function Component33455({ value = 33455, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33455, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33455, 'data-value': derived.doubled }, children);
}
export default Component33455;
