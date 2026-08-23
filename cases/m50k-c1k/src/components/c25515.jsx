import React from 'react';
const LABEL_25515 = 'component_25515';
export function Component25515({ value = 25515, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25515, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25515, 'data-value': derived.doubled }, children);
}
export default Component25515;
