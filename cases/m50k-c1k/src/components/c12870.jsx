import React from 'react';
const LABEL_12870 = 'component_12870';
export function Component12870({ value = 12870, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12870, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12870, 'data-value': derived.doubled }, children);
}
export default Component12870;
