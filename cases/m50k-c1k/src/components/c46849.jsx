import React from 'react';
const LABEL_46849 = 'component_46849';
export function Component46849({ value = 46849, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46849, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46849, 'data-value': derived.doubled }, children);
}
export default Component46849;
