import React from 'react';
const LABEL_28411 = 'component_28411';
export function Component28411({ value = 28411, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28411, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28411, 'data-value': derived.doubled }, children);
}
export default Component28411;
