import React from 'react';
const LABEL_25675 = 'component_25675';
export function Component25675({ value = 25675, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25675, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25675, 'data-value': derived.doubled }, children);
}
export default Component25675;
