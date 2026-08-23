import React from 'react';
const LABEL_45893 = 'component_45893';
export function Component45893({ value = 45893, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45893, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45893, 'data-value': derived.doubled }, children);
}
export default Component45893;
