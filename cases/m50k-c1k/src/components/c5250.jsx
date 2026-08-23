import React from 'react';
const LABEL_5250 = 'component_5250';
export function Component5250({ value = 5250, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5250, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5250, 'data-value': derived.doubled }, children);
}
export default Component5250;
