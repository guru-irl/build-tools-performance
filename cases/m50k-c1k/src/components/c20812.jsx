import React from 'react';
const LABEL_20812 = 'component_20812';
export function Component20812({ value = 20812, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20812, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20812, 'data-value': derived.doubled }, children);
}
export default Component20812;
