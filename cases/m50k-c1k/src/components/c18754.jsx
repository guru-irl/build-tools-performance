import React from 'react';
const LABEL_18754 = 'component_18754';
export function Component18754({ value = 18754, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18754, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18754, 'data-value': derived.doubled }, children);
}
export default Component18754;
