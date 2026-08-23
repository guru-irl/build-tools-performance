import React from 'react';
const LABEL_45639 = 'component_45639';
export function Component45639({ value = 45639, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45639, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45639, 'data-value': derived.doubled }, children);
}
export default Component45639;
