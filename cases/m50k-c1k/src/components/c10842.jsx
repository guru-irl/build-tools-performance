import React from 'react';
const LABEL_10842 = 'component_10842';
export function Component10842({ value = 10842, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10842, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10842, 'data-value': derived.doubled }, children);
}
export default Component10842;
