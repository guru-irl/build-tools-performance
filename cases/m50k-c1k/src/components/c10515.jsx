import React from 'react';
const LABEL_10515 = 'component_10515';
export function Component10515({ value = 10515, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10515, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10515, 'data-value': derived.doubled }, children);
}
export default Component10515;
