import React from 'react';
const LABEL_28156 = 'component_28156';
export function Component28156({ value = 28156, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28156, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28156, 'data-value': derived.doubled }, children);
}
export default Component28156;
