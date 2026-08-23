import React from 'react';
const LABEL_31961 = 'component_31961';
export function Component31961({ value = 31961, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31961, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31961, 'data-value': derived.doubled }, children);
}
export default Component31961;
