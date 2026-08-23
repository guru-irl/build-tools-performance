import React from 'react';
const LABEL_30768 = 'component_30768';
export function Component30768({ value = 30768, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30768, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30768, 'data-value': derived.doubled }, children);
}
export default Component30768;
