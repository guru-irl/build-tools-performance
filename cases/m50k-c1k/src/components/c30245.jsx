import React from 'react';
const LABEL_30245 = 'component_30245';
export function Component30245({ value = 30245, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30245, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30245, 'data-value': derived.doubled }, children);
}
export default Component30245;
