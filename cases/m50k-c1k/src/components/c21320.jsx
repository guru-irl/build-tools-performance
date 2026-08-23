import React from 'react';
const LABEL_21320 = 'component_21320';
export function Component21320({ value = 21320, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21320, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21320, 'data-value': derived.doubled }, children);
}
export default Component21320;
