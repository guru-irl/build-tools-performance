import React from 'react';
const LABEL_7167 = 'component_7167';
export function Component7167({ value = 7167, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7167, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7167, 'data-value': derived.doubled }, children);
}
export default Component7167;
