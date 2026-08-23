import React from 'react';
const LABEL_6229 = 'component_6229';
export function Component6229({ value = 6229, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6229, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6229, 'data-value': derived.doubled }, children);
}
export default Component6229;
