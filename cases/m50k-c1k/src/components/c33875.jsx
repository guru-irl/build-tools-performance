import React from 'react';
const LABEL_33875 = 'component_33875';
export function Component33875({ value = 33875, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33875, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33875, 'data-value': derived.doubled }, children);
}
export default Component33875;
