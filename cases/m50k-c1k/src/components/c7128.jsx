import React from 'react';
const LABEL_7128 = 'component_7128';
export function Component7128({ value = 7128, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7128, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7128, 'data-value': derived.doubled }, children);
}
export default Component7128;
