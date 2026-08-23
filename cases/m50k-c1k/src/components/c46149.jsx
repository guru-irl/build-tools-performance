import React from 'react';
const LABEL_46149 = 'component_46149';
export function Component46149({ value = 46149, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46149, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46149, 'data-value': derived.doubled }, children);
}
export default Component46149;
