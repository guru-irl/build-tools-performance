import React from 'react';
const LABEL_30292 = 'component_30292';
export function Component30292({ value = 30292, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30292, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30292, 'data-value': derived.doubled }, children);
}
export default Component30292;
