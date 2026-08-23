import React from 'react';
const LABEL_10088 = 'component_10088';
export function Component10088({ value = 10088, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10088, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10088, 'data-value': derived.doubled }, children);
}
export default Component10088;
