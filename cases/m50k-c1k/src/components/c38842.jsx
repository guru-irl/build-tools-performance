import React from 'react';
const LABEL_38842 = 'component_38842';
export function Component38842({ value = 38842, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38842, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38842, 'data-value': derived.doubled }, children);
}
export default Component38842;
