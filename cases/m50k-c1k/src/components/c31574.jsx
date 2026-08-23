import React from 'react';
const LABEL_31574 = 'component_31574';
export function Component31574({ value = 31574, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31574, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31574, 'data-value': derived.doubled }, children);
}
export default Component31574;
