import React from 'react';
const LABEL_31236 = 'component_31236';
export function Component31236({ value = 31236, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31236, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31236, 'data-value': derived.doubled }, children);
}
export default Component31236;
