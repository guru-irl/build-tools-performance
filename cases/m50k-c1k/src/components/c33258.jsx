import React from 'react';
const LABEL_33258 = 'component_33258';
export function Component33258({ value = 33258, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33258, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33258, 'data-value': derived.doubled }, children);
}
export default Component33258;
