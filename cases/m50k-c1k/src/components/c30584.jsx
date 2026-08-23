import React from 'react';
const LABEL_30584 = 'component_30584';
export function Component30584({ value = 30584, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30584, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30584, 'data-value': derived.doubled }, children);
}
export default Component30584;
