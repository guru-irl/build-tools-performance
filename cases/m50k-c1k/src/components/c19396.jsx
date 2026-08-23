import React from 'react';
const LABEL_19396 = 'component_19396';
export function Component19396({ value = 19396, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19396, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19396, 'data-value': derived.doubled }, children);
}
export default Component19396;
