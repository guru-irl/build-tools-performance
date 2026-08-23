import React from 'react';
const LABEL_19376 = 'component_19376';
export function Component19376({ value = 19376, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19376, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19376, 'data-value': derived.doubled }, children);
}
export default Component19376;
