import React from 'react';
const LABEL_36768 = 'component_36768';
export function Component36768({ value = 36768, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36768, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36768, 'data-value': derived.doubled }, children);
}
export default Component36768;
