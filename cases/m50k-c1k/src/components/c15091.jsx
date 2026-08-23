import React from 'react';
const LABEL_15091 = 'component_15091';
export function Component15091({ value = 15091, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15091, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15091, 'data-value': derived.doubled }, children);
}
export default Component15091;
