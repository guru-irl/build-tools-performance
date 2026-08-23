import React from 'react';
const LABEL_6553 = 'component_6553';
export function Component6553({ value = 6553, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6553, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6553, 'data-value': derived.doubled }, children);
}
export default Component6553;
