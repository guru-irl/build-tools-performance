import React from 'react';
const LABEL_25632 = 'component_25632';
export function Component25632({ value = 25632, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25632, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25632, 'data-value': derived.doubled }, children);
}
export default Component25632;
