import React from 'react';
const LABEL_6515 = 'component_6515';
export function Component6515({ value = 6515, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6515, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6515, 'data-value': derived.doubled }, children);
}
export default Component6515;
