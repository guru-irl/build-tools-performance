import React from 'react';
const LABEL_33446 = 'component_33446';
export function Component33446({ value = 33446, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33446, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33446, 'data-value': derived.doubled }, children);
}
export default Component33446;
