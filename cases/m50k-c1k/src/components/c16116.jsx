import React from 'react';
const LABEL_16116 = 'component_16116';
export function Component16116({ value = 16116, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16116, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16116, 'data-value': derived.doubled }, children);
}
export default Component16116;
