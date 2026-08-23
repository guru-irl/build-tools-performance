import React from 'react';
const LABEL_13923 = 'component_13923';
export function Component13923({ value = 13923, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13923, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13923, 'data-value': derived.doubled }, children);
}
export default Component13923;
