import React from 'react';
const LABEL_10881 = 'component_10881';
export function Component10881({ value = 10881, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10881, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10881, 'data-value': derived.doubled }, children);
}
export default Component10881;
