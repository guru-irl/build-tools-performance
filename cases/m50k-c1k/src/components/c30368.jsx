import React from 'react';
const LABEL_30368 = 'component_30368';
export function Component30368({ value = 30368, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30368, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30368, 'data-value': derived.doubled }, children);
}
export default Component30368;
