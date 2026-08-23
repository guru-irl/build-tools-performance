import React from 'react';
const LABEL_44882 = 'component_44882';
export function Component44882({ value = 44882, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44882, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44882, 'data-value': derived.doubled }, children);
}
export default Component44882;
