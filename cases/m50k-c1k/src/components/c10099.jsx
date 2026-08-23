import React from 'react';
const LABEL_10099 = 'component_10099';
export function Component10099({ value = 10099, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10099, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10099, 'data-value': derived.doubled }, children);
}
export default Component10099;
