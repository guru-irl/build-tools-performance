import React from 'react';
const LABEL_33195 = 'component_33195';
export function Component33195({ value = 33195, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33195, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33195, 'data-value': derived.doubled }, children);
}
export default Component33195;
