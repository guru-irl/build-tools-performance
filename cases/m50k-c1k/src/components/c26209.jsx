import React from 'react';
const LABEL_26209 = 'component_26209';
export function Component26209({ value = 26209, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26209, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26209, 'data-value': derived.doubled }, children);
}
export default Component26209;
