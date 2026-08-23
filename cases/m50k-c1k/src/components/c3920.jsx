import React from 'react';
const LABEL_3920 = 'component_3920';
export function Component3920({ value = 3920, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3920, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3920, 'data-value': derived.doubled }, children);
}
export default Component3920;
