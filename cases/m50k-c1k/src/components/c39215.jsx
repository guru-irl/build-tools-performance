import React from 'react';
const LABEL_39215 = 'component_39215';
export function Component39215({ value = 39215, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_39215, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_39215, 'data-value': derived.doubled }, children);
}
export default Component39215;
