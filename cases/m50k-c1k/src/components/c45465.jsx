import React from 'react';
const LABEL_45465 = 'component_45465';
export function Component45465({ value = 45465, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45465, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45465, 'data-value': derived.doubled }, children);
}
export default Component45465;
