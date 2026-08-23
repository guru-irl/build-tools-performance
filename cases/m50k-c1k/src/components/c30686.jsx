import React from 'react';
const LABEL_30686 = 'component_30686';
export function Component30686({ value = 30686, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30686, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30686, 'data-value': derived.doubled }, children);
}
export default Component30686;
