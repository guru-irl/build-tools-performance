import React from 'react';
const LABEL_30260 = 'component_30260';
export function Component30260({ value = 30260, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30260, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30260, 'data-value': derived.doubled }, children);
}
export default Component30260;
