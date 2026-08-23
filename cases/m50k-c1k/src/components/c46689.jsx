import React from 'react';
const LABEL_46689 = 'component_46689';
export function Component46689({ value = 46689, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46689, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46689, 'data-value': derived.doubled }, children);
}
export default Component46689;
