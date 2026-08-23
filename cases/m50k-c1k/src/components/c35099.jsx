import React from 'react';
const LABEL_35099 = 'component_35099';
export function Component35099({ value = 35099, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35099, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35099, 'data-value': derived.doubled }, children);
}
export default Component35099;
