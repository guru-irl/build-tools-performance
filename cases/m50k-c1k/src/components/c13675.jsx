import React from 'react';
const LABEL_13675 = 'component_13675';
export function Component13675({ value = 13675, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13675, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13675, 'data-value': derived.doubled }, children);
}
export default Component13675;
