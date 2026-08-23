import React from 'react';
const LABEL_30602 = 'component_30602';
export function Component30602({ value = 30602, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30602, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30602, 'data-value': derived.doubled }, children);
}
export default Component30602;
