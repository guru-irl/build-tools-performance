import React from 'react';
const LABEL_46172 = 'component_46172';
export function Component46172({ value = 46172, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46172, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46172, 'data-value': derived.doubled }, children);
}
export default Component46172;
