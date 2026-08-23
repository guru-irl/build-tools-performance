import React from 'react';
const LABEL_30039 = 'component_30039';
export function Component30039({ value = 30039, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30039, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30039, 'data-value': derived.doubled }, children);
}
export default Component30039;
