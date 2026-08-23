import React from 'react';
const LABEL_24594 = 'component_24594';
export function Component24594({ value = 24594, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24594, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24594, 'data-value': derived.doubled }, children);
}
export default Component24594;
