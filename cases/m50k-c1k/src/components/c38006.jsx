import React from 'react';
const LABEL_38006 = 'component_38006';
export function Component38006({ value = 38006, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38006, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38006, 'data-value': derived.doubled }, children);
}
export default Component38006;
