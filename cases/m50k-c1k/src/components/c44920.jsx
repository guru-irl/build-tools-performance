import React from 'react';
const LABEL_44920 = 'component_44920';
export function Component44920({ value = 44920, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44920, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44920, 'data-value': derived.doubled }, children);
}
export default Component44920;
