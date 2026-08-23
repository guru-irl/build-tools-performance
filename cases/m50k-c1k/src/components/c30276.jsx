import React from 'react';
const LABEL_30276 = 'component_30276';
export function Component30276({ value = 30276, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30276, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30276, 'data-value': derived.doubled }, children);
}
export default Component30276;
