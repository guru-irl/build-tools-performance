import React from 'react';
const LABEL_16345 = 'component_16345';
export function Component16345({ value = 16345, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16345, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16345, 'data-value': derived.doubled }, children);
}
export default Component16345;
