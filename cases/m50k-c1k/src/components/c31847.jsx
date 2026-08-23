import React from 'react';
const LABEL_31847 = 'component_31847';
export function Component31847({ value = 31847, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31847, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31847, 'data-value': derived.doubled }, children);
}
export default Component31847;
