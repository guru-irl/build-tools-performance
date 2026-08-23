import React from 'react';
const LABEL_38432 = 'component_38432';
export function Component38432({ value = 38432, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38432, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38432, 'data-value': derived.doubled }, children);
}
export default Component38432;
