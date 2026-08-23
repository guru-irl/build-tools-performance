import React from 'react';
const LABEL_44424 = 'component_44424';
export function Component44424({ value = 44424, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44424, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44424, 'data-value': derived.doubled }, children);
}
export default Component44424;
