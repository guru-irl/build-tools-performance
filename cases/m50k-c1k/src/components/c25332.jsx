import React from 'react';
const LABEL_25332 = 'component_25332';
export function Component25332({ value = 25332, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25332, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25332, 'data-value': derived.doubled }, children);
}
export default Component25332;
