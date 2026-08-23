import React from 'react';
const LABEL_30699 = 'component_30699';
export function Component30699({ value = 30699, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30699, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30699, 'data-value': derived.doubled }, children);
}
export default Component30699;
