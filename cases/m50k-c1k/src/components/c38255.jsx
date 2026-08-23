import React from 'react';
const LABEL_38255 = 'component_38255';
export function Component38255({ value = 38255, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38255, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38255, 'data-value': derived.doubled }, children);
}
export default Component38255;
