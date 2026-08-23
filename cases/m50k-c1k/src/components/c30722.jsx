import React from 'react';
const LABEL_30722 = 'component_30722';
export function Component30722({ value = 30722, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30722, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30722, 'data-value': derived.doubled }, children);
}
export default Component30722;
