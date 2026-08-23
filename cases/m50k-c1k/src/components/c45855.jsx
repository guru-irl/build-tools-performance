import React from 'react';
const LABEL_45855 = 'component_45855';
export function Component45855({ value = 45855, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45855, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45855, 'data-value': derived.doubled }, children);
}
export default Component45855;
