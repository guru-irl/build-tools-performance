import React from 'react';
const LABEL_33515 = 'component_33515';
export function Component33515({ value = 33515, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33515, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33515, 'data-value': derived.doubled }, children);
}
export default Component33515;
