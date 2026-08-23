import React from 'react';
const LABEL_38156 = 'component_38156';
export function Component38156({ value = 38156, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38156, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38156, 'data-value': derived.doubled }, children);
}
export default Component38156;
