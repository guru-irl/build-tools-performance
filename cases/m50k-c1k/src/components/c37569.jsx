import React from 'react';
const LABEL_37569 = 'component_37569';
export function Component37569({ value = 37569, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37569, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37569, 'data-value': derived.doubled }, children);
}
export default Component37569;
