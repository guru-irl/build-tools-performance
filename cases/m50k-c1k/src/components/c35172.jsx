import React from 'react';
const LABEL_35172 = 'component_35172';
export function Component35172({ value = 35172, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35172, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35172, 'data-value': derived.doubled }, children);
}
export default Component35172;
