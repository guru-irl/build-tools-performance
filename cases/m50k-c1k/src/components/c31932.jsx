import React from 'react';
const LABEL_31932 = 'component_31932';
export function Component31932({ value = 31932, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31932, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31932, 'data-value': derived.doubled }, children);
}
export default Component31932;
