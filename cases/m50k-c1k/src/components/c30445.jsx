import React from 'react';
const LABEL_30445 = 'component_30445';
export function Component30445({ value = 30445, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30445, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30445, 'data-value': derived.doubled }, children);
}
export default Component30445;
