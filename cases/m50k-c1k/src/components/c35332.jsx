import React from 'react';
const LABEL_35332 = 'component_35332';
export function Component35332({ value = 35332, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35332, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35332, 'data-value': derived.doubled }, children);
}
export default Component35332;
