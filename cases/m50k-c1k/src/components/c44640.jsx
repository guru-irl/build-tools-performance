import React from 'react';
const LABEL_44640 = 'component_44640';
export function Component44640({ value = 44640, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44640, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44640, 'data-value': derived.doubled }, children);
}
export default Component44640;
