import React from 'react';
const LABEL_46243 = 'component_46243';
export function Component46243({ value = 46243, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46243, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46243, 'data-value': derived.doubled }, children);
}
export default Component46243;
