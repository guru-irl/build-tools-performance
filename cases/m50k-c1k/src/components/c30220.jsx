import React from 'react';
const LABEL_30220 = 'component_30220';
export function Component30220({ value = 30220, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30220, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30220, 'data-value': derived.doubled }, children);
}
export default Component30220;
