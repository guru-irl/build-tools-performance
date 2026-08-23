import React from 'react';
const LABEL_15977 = 'component_15977';
export function Component15977({ value = 15977, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15977, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15977, 'data-value': derived.doubled }, children);
}
export default Component15977;
