import React from 'react';
const LABEL_30313 = 'component_30313';
export function Component30313({ value = 30313, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30313, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30313, 'data-value': derived.doubled }, children);
}
export default Component30313;
