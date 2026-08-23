import React from 'react';
const LABEL_12216 = 'component_12216';
export function Component12216({ value = 12216, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12216, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12216, 'data-value': derived.doubled }, children);
}
export default Component12216;
