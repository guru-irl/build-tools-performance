import React from 'react';
const LABEL_45849 = 'component_45849';
export function Component45849({ value = 45849, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45849, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45849, 'data-value': derived.doubled }, children);
}
export default Component45849;
