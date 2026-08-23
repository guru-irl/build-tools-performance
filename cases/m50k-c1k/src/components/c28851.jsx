import React from 'react';
const LABEL_28851 = 'component_28851';
export function Component28851({ value = 28851, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28851, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28851, 'data-value': derived.doubled }, children);
}
export default Component28851;
