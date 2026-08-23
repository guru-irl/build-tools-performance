import React from 'react';
const LABEL_28754 = 'component_28754';
export function Component28754({ value = 28754, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28754, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28754, 'data-value': derived.doubled }, children);
}
export default Component28754;
