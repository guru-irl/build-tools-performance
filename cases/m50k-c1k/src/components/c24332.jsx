import React from 'react';
const LABEL_24332 = 'component_24332';
export function Component24332({ value = 24332, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24332, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24332, 'data-value': derived.doubled }, children);
}
export default Component24332;
