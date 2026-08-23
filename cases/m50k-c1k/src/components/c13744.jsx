import React from 'react';
const LABEL_13744 = 'component_13744';
export function Component13744({ value = 13744, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13744, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13744, 'data-value': derived.doubled }, children);
}
export default Component13744;
