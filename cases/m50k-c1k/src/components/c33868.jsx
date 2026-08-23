import React from 'react';
const LABEL_33868 = 'component_33868';
export function Component33868({ value = 33868, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33868, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33868, 'data-value': derived.doubled }, children);
}
export default Component33868;
