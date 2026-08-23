import React from 'react';
const LABEL_17320 = 'component_17320';
export function Component17320({ value = 17320, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17320, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17320, 'data-value': derived.doubled }, children);
}
export default Component17320;
