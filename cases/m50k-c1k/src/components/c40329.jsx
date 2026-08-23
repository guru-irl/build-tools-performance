import React from 'react';
const LABEL_40329 = 'component_40329';
export function Component40329({ value = 40329, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40329, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40329, 'data-value': derived.doubled }, children);
}
export default Component40329;
