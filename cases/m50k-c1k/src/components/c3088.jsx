import React from 'react';
const LABEL_3088 = 'component_3088';
export function Component3088({ value = 3088, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3088, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3088, 'data-value': derived.doubled }, children);
}
export default Component3088;
