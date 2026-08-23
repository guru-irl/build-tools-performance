import React from 'react';
const LABEL_30110 = 'component_30110';
export function Component30110({ value = 30110, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30110, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30110, 'data-value': derived.doubled }, children);
}
export default Component30110;
