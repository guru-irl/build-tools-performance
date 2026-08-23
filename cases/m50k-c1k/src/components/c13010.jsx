import React from 'react';
const LABEL_13010 = 'component_13010';
export function Component13010({ value = 13010, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13010, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13010, 'data-value': derived.doubled }, children);
}
export default Component13010;
