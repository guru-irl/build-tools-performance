import React from 'react';
const LABEL_33502 = 'component_33502';
export function Component33502({ value = 33502, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33502, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33502, 'data-value': derived.doubled }, children);
}
export default Component33502;
