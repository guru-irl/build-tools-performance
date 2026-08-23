import React from 'react';
const LABEL_9015 = 'component_9015';
export function Component9015({ value = 9015, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9015, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9015, 'data-value': derived.doubled }, children);
}
export default Component9015;
