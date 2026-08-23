import React from 'react';
const LABEL_31636 = 'component_31636';
export function Component31636({ value = 31636, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31636, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31636, 'data-value': derived.doubled }, children);
}
export default Component31636;
