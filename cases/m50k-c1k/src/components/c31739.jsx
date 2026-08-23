import React from 'react';
const LABEL_31739 = 'component_31739';
export function Component31739({ value = 31739, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31739, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31739, 'data-value': derived.doubled }, children);
}
export default Component31739;
