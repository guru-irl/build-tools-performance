import React from 'react';
const LABEL_7320 = 'component_7320';
export function Component7320({ value = 7320, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7320, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7320, 'data-value': derived.doubled }, children);
}
export default Component7320;
