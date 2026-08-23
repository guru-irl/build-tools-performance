import React from 'react';
const LABEL_10553 = 'component_10553';
export function Component10553({ value = 10553, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10553, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10553, 'data-value': derived.doubled }, children);
}
export default Component10553;
