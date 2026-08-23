import React from 'react';
const LABEL_30834 = 'component_30834';
export function Component30834({ value = 30834, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30834, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30834, 'data-value': derived.doubled }, children);
}
export default Component30834;
