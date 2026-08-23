import React from 'react';
const LABEL_12156 = 'component_12156';
export function Component12156({ value = 12156, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12156, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12156, 'data-value': derived.doubled }, children);
}
export default Component12156;
