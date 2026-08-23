import React from 'react';
const LABEL_18156 = 'component_18156';
export function Component18156({ value = 18156, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18156, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18156, 'data-value': derived.doubled }, children);
}
export default Component18156;
