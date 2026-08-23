import React from 'react';
const LABEL_25499 = 'component_25499';
export function Component25499({ value = 25499, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25499, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25499, 'data-value': derived.doubled }, children);
}
export default Component25499;
