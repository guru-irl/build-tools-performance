import React from 'react';
const LABEL_25989 = 'component_25989';
export function Component25989({ value = 25989, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25989, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25989, 'data-value': derived.doubled }, children);
}
export default Component25989;
