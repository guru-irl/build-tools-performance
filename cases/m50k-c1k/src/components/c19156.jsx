import React from 'react';
const LABEL_19156 = 'component_19156';
export function Component19156({ value = 19156, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19156, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19156, 'data-value': derived.doubled }, children);
}
export default Component19156;
