import React from 'react';
const LABEL_30139 = 'component_30139';
export function Component30139({ value = 30139, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30139, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30139, 'data-value': derived.doubled }, children);
}
export default Component30139;
