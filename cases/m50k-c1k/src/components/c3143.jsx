import React from 'react';
const LABEL_3143 = 'component_3143';
export function Component3143({ value = 3143, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3143, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3143, 'data-value': derived.doubled }, children);
}
export default Component3143;
