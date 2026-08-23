import React from 'react';
const LABEL_3799 = 'component_3799';
export function Component3799({ value = 3799, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3799, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3799, 'data-value': derived.doubled }, children);
}
export default Component3799;
