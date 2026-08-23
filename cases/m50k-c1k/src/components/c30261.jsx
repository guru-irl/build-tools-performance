import React from 'react';
const LABEL_30261 = 'component_30261';
export function Component30261({ value = 30261, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30261, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30261, 'data-value': derived.doubled }, children);
}
export default Component30261;
