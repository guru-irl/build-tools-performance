import React from 'react';
const LABEL_37925 = 'component_37925';
export function Component37925({ value = 37925, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37925, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37925, 'data-value': derived.doubled }, children);
}
export default Component37925;
