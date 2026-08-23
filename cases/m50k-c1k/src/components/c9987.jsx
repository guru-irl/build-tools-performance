import React from 'react';
const LABEL_9987 = 'component_9987';
export function Component9987({ value = 9987, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9987, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9987, 'data-value': derived.doubled }, children);
}
export default Component9987;
