import React from 'react';
const LABEL_3153 = 'component_3153';
export function Component3153({ value = 3153, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3153, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3153, 'data-value': derived.doubled }, children);
}
export default Component3153;
