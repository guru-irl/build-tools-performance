import React from 'react';
const LABEL_46830 = 'component_46830';
export function Component46830({ value = 46830, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46830, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46830, 'data-value': derived.doubled }, children);
}
export default Component46830;
