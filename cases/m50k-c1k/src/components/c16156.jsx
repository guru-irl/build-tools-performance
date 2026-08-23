import React from 'react';
const LABEL_16156 = 'component_16156';
export function Component16156({ value = 16156, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16156, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16156, 'data-value': derived.doubled }, children);
}
export default Component16156;
