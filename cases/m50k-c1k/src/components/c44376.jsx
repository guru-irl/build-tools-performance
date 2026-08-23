import React from 'react';
const LABEL_44376 = 'component_44376';
export function Component44376({ value = 44376, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44376, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44376, 'data-value': derived.doubled }, children);
}
export default Component44376;
