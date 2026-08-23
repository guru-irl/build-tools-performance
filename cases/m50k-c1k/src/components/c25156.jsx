import React from 'react';
const LABEL_25156 = 'component_25156';
export function Component25156({ value = 25156, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25156, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25156, 'data-value': derived.doubled }, children);
}
export default Component25156;
