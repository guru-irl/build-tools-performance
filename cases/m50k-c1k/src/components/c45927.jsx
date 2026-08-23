import React from 'react';
const LABEL_45927 = 'component_45927';
export function Component45927({ value = 45927, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45927, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45927, 'data-value': derived.doubled }, children);
}
export default Component45927;
