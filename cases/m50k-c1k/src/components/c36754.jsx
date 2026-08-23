import React from 'react';
const LABEL_36754 = 'component_36754';
export function Component36754({ value = 36754, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36754, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36754, 'data-value': derived.doubled }, children);
}
export default Component36754;
