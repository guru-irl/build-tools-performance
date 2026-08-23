import React from 'react';
const LABEL_44416 = 'component_44416';
export function Component44416({ value = 44416, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44416, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44416, 'data-value': derived.doubled }, children);
}
export default Component44416;
