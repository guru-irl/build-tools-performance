import React from 'react';
const LABEL_8959 = 'component_8959';
export function Component8959({ value = 8959, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8959, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8959, 'data-value': derived.doubled }, children);
}
export default Component8959;
