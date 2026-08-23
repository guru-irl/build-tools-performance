import React from 'react';
const LABEL_46789 = 'component_46789';
export function Component46789({ value = 46789, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46789, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46789, 'data-value': derived.doubled }, children);
}
export default Component46789;
