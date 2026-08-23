import React from 'react';
const LABEL_44332 = 'component_44332';
export function Component44332({ value = 44332, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44332, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44332, 'data-value': derived.doubled }, children);
}
export default Component44332;
