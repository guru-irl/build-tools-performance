import React from 'react';
const LABEL_22882 = 'component_22882';
export function Component22882({ value = 22882, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22882, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22882, 'data-value': derived.doubled }, children);
}
export default Component22882;
