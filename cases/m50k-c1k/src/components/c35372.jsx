import React from 'react';
const LABEL_35372 = 'component_35372';
export function Component35372({ value = 35372, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35372, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35372, 'data-value': derived.doubled }, children);
}
export default Component35372;
