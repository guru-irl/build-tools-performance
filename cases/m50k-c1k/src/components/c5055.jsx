import React from 'react';
const LABEL_5055 = 'component_5055';
export function Component5055({ value = 5055, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5055, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5055, 'data-value': derived.doubled }, children);
}
export default Component5055;
