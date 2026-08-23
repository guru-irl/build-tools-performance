import React from 'react';
const LABEL_3192 = 'component_3192';
export function Component3192({ value = 3192, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3192, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3192, 'data-value': derived.doubled }, children);
}
export default Component3192;
