import React from 'react';
const LABEL_156 = 'component_156';
export function Component156({ value = 156, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_156, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_156, 'data-value': derived.doubled }, children);
}
export default Component156;
