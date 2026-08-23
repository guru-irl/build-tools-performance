import React from 'react';
const LABEL_30786 = 'component_30786';
export function Component30786({ value = 30786, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30786, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30786, 'data-value': derived.doubled }, children);
}
export default Component30786;
