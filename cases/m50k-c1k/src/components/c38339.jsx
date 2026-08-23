import React from 'react';
const LABEL_38339 = 'component_38339';
export function Component38339({ value = 38339, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38339, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38339, 'data-value': derived.doubled }, children);
}
export default Component38339;
