import React from 'react';
const LABEL_6631 = 'component_6631';
export function Component6631({ value = 6631, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6631, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6631, 'data-value': derived.doubled }, children);
}
export default Component6631;
