import React from 'react';
const LABEL_19551 = 'component_19551';
export function Component19551({ value = 19551, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19551, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19551, 'data-value': derived.doubled }, children);
}
export default Component19551;
