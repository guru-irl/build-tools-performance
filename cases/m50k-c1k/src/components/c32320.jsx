import React from 'react';
const LABEL_32320 = 'component_32320';
export function Component32320({ value = 32320, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32320, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32320, 'data-value': derived.doubled }, children);
}
export default Component32320;
