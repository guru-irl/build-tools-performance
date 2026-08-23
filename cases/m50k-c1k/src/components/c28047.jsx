import React from 'react';
const LABEL_28047 = 'component_28047';
export function Component28047({ value = 28047, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28047, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28047, 'data-value': derived.doubled }, children);
}
export default Component28047;
