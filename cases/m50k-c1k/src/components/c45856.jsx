import React from 'react';
const LABEL_45856 = 'component_45856';
export function Component45856({ value = 45856, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45856, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45856, 'data-value': derived.doubled }, children);
}
export default Component45856;
