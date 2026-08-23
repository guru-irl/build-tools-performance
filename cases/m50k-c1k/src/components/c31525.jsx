import React from 'react';
const LABEL_31525 = 'component_31525';
export function Component31525({ value = 31525, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31525, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31525, 'data-value': derived.doubled }, children);
}
export default Component31525;
