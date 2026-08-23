import React from 'react';
const LABEL_10239 = 'component_10239';
export function Component10239({ value = 10239, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10239, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10239, 'data-value': derived.doubled }, children);
}
export default Component10239;
