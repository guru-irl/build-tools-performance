import React from 'react';
const LABEL_13645 = 'component_13645';
export function Component13645({ value = 13645, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13645, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13645, 'data-value': derived.doubled }, children);
}
export default Component13645;
