import React from 'react';
const LABEL_30239 = 'component_30239';
export function Component30239({ value = 30239, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30239, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30239, 'data-value': derived.doubled }, children);
}
export default Component30239;
