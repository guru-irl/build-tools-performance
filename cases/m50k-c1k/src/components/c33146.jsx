import React from 'react';
const LABEL_33146 = 'component_33146';
export function Component33146({ value = 33146, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33146, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33146, 'data-value': derived.doubled }, children);
}
export default Component33146;
