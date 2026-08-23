import React from 'react';
const LABEL_30620 = 'component_30620';
export function Component30620({ value = 30620, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30620, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30620, 'data-value': derived.doubled }, children);
}
export default Component30620;
