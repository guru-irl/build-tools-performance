import React from 'react';
const LABEL_12700 = 'component_12700';
export function Component12700({ value = 12700, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12700, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12700, 'data-value': derived.doubled }, children);
}
export default Component12700;
