import React from 'react';
const LABEL_32920 = 'component_32920';
export function Component32920({ value = 32920, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32920, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32920, 'data-value': derived.doubled }, children);
}
export default Component32920;
