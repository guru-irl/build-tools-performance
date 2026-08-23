import React from 'react';
const LABEL_22847 = 'component_22847';
export function Component22847({ value = 22847, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22847, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22847, 'data-value': derived.doubled }, children);
}
export default Component22847;
