import React from 'react';
const LABEL_25132 = 'component_25132';
export function Component25132({ value = 25132, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25132, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25132, 'data-value': derived.doubled }, children);
}
export default Component25132;
