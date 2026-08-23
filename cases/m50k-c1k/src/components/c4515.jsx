import React from 'react';
const LABEL_4515 = 'component_4515';
export function Component4515({ value = 4515, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4515, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4515, 'data-value': derived.doubled }, children);
}
export default Component4515;
