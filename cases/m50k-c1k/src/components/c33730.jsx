import React from 'react';
const LABEL_33730 = 'component_33730';
export function Component33730({ value = 33730, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33730, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33730, 'data-value': derived.doubled }, children);
}
export default Component33730;
