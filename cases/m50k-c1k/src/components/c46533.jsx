import React from 'react';
const LABEL_46533 = 'component_46533';
export function Component46533({ value = 46533, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46533, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46533, 'data-value': derived.doubled }, children);
}
export default Component46533;
