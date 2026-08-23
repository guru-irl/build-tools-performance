import React from 'react';
const LABEL_30728 = 'component_30728';
export function Component30728({ value = 30728, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30728, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30728, 'data-value': derived.doubled }, children);
}
export default Component30728;
