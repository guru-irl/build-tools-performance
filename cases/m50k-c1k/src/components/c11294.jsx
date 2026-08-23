import React from 'react';
const LABEL_11294 = 'component_11294';
export function Component11294({ value = 11294, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11294, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11294, 'data-value': derived.doubled }, children);
}
export default Component11294;
