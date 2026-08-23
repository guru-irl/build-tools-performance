import React from 'react';
const LABEL_33744 = 'component_33744';
export function Component33744({ value = 33744, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33744, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33744, 'data-value': derived.doubled }, children);
}
export default Component33744;
