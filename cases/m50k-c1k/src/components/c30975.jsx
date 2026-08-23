import React from 'react';
const LABEL_30975 = 'component_30975';
export function Component30975({ value = 30975, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30975, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30975, 'data-value': derived.doubled }, children);
}
export default Component30975;
