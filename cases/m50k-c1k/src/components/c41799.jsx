import React from 'react';
const LABEL_41799 = 'component_41799';
export function Component41799({ value = 41799, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_41799, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_41799, 'data-value': derived.doubled }, children);
}
export default Component41799;
