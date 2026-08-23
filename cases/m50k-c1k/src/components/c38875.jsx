import React from 'react';
const LABEL_38875 = 'component_38875';
export function Component38875({ value = 38875, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38875, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38875, 'data-value': derived.doubled }, children);
}
export default Component38875;
