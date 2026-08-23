import React from 'react';
const LABEL_3559 = 'component_3559';
export function Component3559({ value = 3559, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3559, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3559, 'data-value': derived.doubled }, children);
}
export default Component3559;
