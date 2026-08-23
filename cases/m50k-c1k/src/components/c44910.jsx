import React from 'react';
const LABEL_44910 = 'component_44910';
export function Component44910({ value = 44910, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44910, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44910, 'data-value': derived.doubled }, children);
}
export default Component44910;
