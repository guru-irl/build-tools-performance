import React from 'react';
const LABEL_20010 = 'component_20010';
export function Component20010({ value = 20010, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20010, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20010, 'data-value': derived.doubled }, children);
}
export default Component20010;
