import React from 'react';
const LABEL_38290 = 'component_38290';
export function Component38290({ value = 38290, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38290, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38290, 'data-value': derived.doubled }, children);
}
export default Component38290;
