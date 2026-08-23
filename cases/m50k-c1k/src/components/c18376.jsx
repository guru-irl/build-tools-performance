import React from 'react';
const LABEL_18376 = 'component_18376';
export function Component18376({ value = 18376, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18376, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18376, 'data-value': derived.doubled }, children);
}
export default Component18376;
