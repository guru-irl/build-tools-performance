import React from 'react';
const LABEL_24631 = 'component_24631';
export function Component24631({ value = 24631, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24631, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24631, 'data-value': derived.doubled }, children);
}
export default Component24631;
