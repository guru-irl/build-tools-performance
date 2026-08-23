import React from 'react';
const LABEL_32515 = 'component_32515';
export function Component32515({ value = 32515, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32515, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32515, 'data-value': derived.doubled }, children);
}
export default Component32515;
