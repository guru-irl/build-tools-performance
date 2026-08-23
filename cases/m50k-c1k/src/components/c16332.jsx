import React from 'react';
const LABEL_16332 = 'component_16332';
export function Component16332({ value = 16332, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16332, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16332, 'data-value': derived.doubled }, children);
}
export default Component16332;
