import React from 'react';
const LABEL_37849 = 'component_37849';
export function Component37849({ value = 37849, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37849, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37849, 'data-value': derived.doubled }, children);
}
export default Component37849;
