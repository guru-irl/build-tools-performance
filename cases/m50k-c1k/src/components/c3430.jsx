import React from 'react';
const LABEL_3430 = 'component_3430';
export function Component3430({ value = 3430, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3430, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3430, 'data-value': derived.doubled }, children);
}
export default Component3430;
