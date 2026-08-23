import React from 'react';
const LABEL_10996 = 'component_10996';
export function Component10996({ value = 10996, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10996, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10996, 'data-value': derived.doubled }, children);
}
export default Component10996;
