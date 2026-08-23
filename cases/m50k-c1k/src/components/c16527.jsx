import React from 'react';
const LABEL_16527 = 'component_16527';
export function Component16527({ value = 16527, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16527, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16527, 'data-value': derived.doubled }, children);
}
export default Component16527;
