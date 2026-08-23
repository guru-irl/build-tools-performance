import React from 'react';
const LABEL_30257 = 'component_30257';
export function Component30257({ value = 30257, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30257, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30257, 'data-value': derived.doubled }, children);
}
export default Component30257;
