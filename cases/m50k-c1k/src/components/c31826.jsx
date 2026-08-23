import React from 'react';
const LABEL_31826 = 'component_31826';
export function Component31826({ value = 31826, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31826, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31826, 'data-value': derived.doubled }, children);
}
export default Component31826;
