import React from 'react';
const LABEL_32631 = 'component_32631';
export function Component32631({ value = 32631, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32631, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32631, 'data-value': derived.doubled }, children);
}
export default Component32631;
