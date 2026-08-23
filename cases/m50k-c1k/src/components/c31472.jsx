import React from 'react';
const LABEL_31472 = 'component_31472';
export function Component31472({ value = 31472, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31472, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31472, 'data-value': derived.doubled }, children);
}
export default Component31472;
