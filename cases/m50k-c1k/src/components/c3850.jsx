import React from 'react';
const LABEL_3850 = 'component_3850';
export function Component3850({ value = 3850, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3850, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3850, 'data-value': derived.doubled }, children);
}
export default Component3850;
