import React from 'react';
const LABEL_44730 = 'component_44730';
export function Component44730({ value = 44730, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44730, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44730, 'data-value': derived.doubled }, children);
}
export default Component44730;
