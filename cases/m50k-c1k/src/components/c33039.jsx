import React from 'react';
const LABEL_33039 = 'component_33039';
export function Component33039({ value = 33039, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33039, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33039, 'data-value': derived.doubled }, children);
}
export default Component33039;
