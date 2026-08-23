import React from 'react';
const LABEL_37276 = 'component_37276';
export function Component37276({ value = 37276, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37276, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37276, 'data-value': derived.doubled }, children);
}
export default Component37276;
