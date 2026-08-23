import React from 'react';
const LABEL_3516 = 'component_3516';
export function Component3516({ value = 3516, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3516, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3516, 'data-value': derived.doubled }, children);
}
export default Component3516;
