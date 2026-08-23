import React from 'react';
const LABEL_30040 = 'component_30040';
export function Component30040({ value = 30040, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30040, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30040, 'data-value': derived.doubled }, children);
}
export default Component30040;
