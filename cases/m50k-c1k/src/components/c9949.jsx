import React from 'react';
const LABEL_9949 = 'component_9949';
export function Component9949({ value = 9949, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9949, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9949, 'data-value': derived.doubled }, children);
}
export default Component9949;
