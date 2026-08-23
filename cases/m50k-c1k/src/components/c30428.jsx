import React from 'react';
const LABEL_30428 = 'component_30428';
export function Component30428({ value = 30428, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30428, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30428, 'data-value': derived.doubled }, children);
}
export default Component30428;
