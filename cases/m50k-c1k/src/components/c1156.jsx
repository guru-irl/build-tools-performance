import React from 'react';
const LABEL_1156 = 'component_1156';
export function Component1156({ value = 1156, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1156, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1156, 'data-value': derived.doubled }, children);
}
export default Component1156;
