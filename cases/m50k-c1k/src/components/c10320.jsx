import React from 'react';
const LABEL_10320 = 'component_10320';
export function Component10320({ value = 10320, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10320, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10320, 'data-value': derived.doubled }, children);
}
export default Component10320;
