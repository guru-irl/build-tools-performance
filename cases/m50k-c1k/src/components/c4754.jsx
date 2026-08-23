import React from 'react';
const LABEL_4754 = 'component_4754';
export function Component4754({ value = 4754, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4754, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4754, 'data-value': derived.doubled }, children);
}
export default Component4754;
