import React from 'react';
const LABEL_12882 = 'component_12882';
export function Component12882({ value = 12882, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12882, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12882, 'data-value': derived.doubled }, children);
}
export default Component12882;
