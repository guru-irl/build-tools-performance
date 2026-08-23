import React from 'react';
const LABEL_23320 = 'component_23320';
export function Component23320({ value = 23320, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23320, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23320, 'data-value': derived.doubled }, children);
}
export default Component23320;
