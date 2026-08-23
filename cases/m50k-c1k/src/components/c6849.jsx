import React from 'react';
const LABEL_6849 = 'component_6849';
export function Component6849({ value = 6849, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6849, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6849, 'data-value': derived.doubled }, children);
}
export default Component6849;
