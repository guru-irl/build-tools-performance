import React from 'react';
const LABEL_46524 = 'component_46524';
export function Component46524({ value = 46524, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46524, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46524, 'data-value': derived.doubled }, children);
}
export default Component46524;
