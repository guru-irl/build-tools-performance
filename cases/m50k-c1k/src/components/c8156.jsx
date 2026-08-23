import React from 'react';
const LABEL_8156 = 'component_8156';
export function Component8156({ value = 8156, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8156, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8156, 'data-value': derived.doubled }, children);
}
export default Component8156;
