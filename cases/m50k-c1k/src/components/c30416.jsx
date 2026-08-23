import React from 'react';
const LABEL_30416 = 'component_30416';
export function Component30416({ value = 30416, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30416, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30416, 'data-value': derived.doubled }, children);
}
export default Component30416;
