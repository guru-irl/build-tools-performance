import React from 'react';
const LABEL_10347 = 'component_10347';
export function Component10347({ value = 10347, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10347, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10347, 'data-value': derived.doubled }, children);
}
export default Component10347;
