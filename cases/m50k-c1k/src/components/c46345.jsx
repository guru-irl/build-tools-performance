import React from 'react';
const LABEL_46345 = 'component_46345';
export function Component46345({ value = 46345, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46345, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46345, 'data-value': derived.doubled }, children);
}
export default Component46345;
