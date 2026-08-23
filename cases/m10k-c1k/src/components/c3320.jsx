import React from 'react';
const LABEL_3320 = 'component_3320';
export function Component3320({ value = 3320, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3320, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3320, 'data-value': derived.doubled }, children);
}
export default Component3320;
