import React from 'react';
const LABEL_33968 = 'component_33968';
export function Component33968({ value = 33968, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33968, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33968, 'data-value': derived.doubled }, children);
}
export default Component33968;
