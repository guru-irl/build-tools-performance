import React from 'react';
const LABEL_30960 = 'component_30960';
export function Component30960({ value = 30960, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30960, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30960, 'data-value': derived.doubled }, children);
}
export default Component30960;
