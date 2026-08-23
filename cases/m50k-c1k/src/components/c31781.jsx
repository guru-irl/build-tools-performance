import React from 'react';
const LABEL_31781 = 'component_31781';
export function Component31781({ value = 31781, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31781, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31781, 'data-value': derived.doubled }, children);
}
export default Component31781;
