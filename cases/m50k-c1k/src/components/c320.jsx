import React from 'react';
const LABEL_320 = 'component_320';
export function Component320({ value = 320, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_320, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_320, 'data-value': derived.doubled }, children);
}
export default Component320;
