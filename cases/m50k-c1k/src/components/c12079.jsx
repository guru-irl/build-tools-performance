import React from 'react';
const LABEL_12079 = 'component_12079';
export function Component12079({ value = 12079, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12079, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12079, 'data-value': derived.doubled }, children);
}
export default Component12079;
