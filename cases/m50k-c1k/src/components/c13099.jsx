import React from 'react';
const LABEL_13099 = 'component_13099';
export function Component13099({ value = 13099, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13099, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13099, 'data-value': derived.doubled }, children);
}
export default Component13099;
