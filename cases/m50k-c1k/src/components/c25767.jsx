import React from 'react';
const LABEL_25767 = 'component_25767';
export function Component25767({ value = 25767, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25767, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25767, 'data-value': derived.doubled }, children);
}
export default Component25767;
