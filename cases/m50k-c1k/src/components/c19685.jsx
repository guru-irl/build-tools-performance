import React from 'react';
const LABEL_19685 = 'component_19685';
export function Component19685({ value = 19685, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19685, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19685, 'data-value': derived.doubled }, children);
}
export default Component19685;
