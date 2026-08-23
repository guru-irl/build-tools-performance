import React from 'react';
const LABEL_30924 = 'component_30924';
export function Component30924({ value = 30924, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30924, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30924, 'data-value': derived.doubled }, children);
}
export default Component30924;
