import React from 'react';
const LABEL_17669 = 'component_17669';
export function Component17669({ value = 17669, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17669, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17669, 'data-value': derived.doubled }, children);
}
export default Component17669;
