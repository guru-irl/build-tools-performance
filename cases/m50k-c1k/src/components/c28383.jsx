import React from 'react';
const LABEL_28383 = 'component_28383';
export function Component28383({ value = 28383, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28383, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28383, 'data-value': derived.doubled }, children);
}
export default Component28383;
