import React from 'react';
const LABEL_30489 = 'component_30489';
export function Component30489({ value = 30489, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30489, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30489, 'data-value': derived.doubled }, children);
}
export default Component30489;
