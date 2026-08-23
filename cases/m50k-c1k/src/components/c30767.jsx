import React from 'react';
const LABEL_30767 = 'component_30767';
export function Component30767({ value = 30767, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30767, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30767, 'data-value': derived.doubled }, children);
}
export default Component30767;
