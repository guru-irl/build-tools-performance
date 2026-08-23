import React from 'react';
const LABEL_37103 = 'component_37103';
export function Component37103({ value = 37103, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37103, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37103, 'data-value': derived.doubled }, children);
}
export default Component37103;
