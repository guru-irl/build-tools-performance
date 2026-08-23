import React from 'react';
const LABEL_33308 = 'component_33308';
export function Component33308({ value = 33308, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33308, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33308, 'data-value': derived.doubled }, children);
}
export default Component33308;
