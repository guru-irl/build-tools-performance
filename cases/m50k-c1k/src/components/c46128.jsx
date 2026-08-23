import React from 'react';
const LABEL_46128 = 'component_46128';
export function Component46128({ value = 46128, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46128, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46128, 'data-value': derived.doubled }, children);
}
export default Component46128;
