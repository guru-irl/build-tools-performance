import React from 'react';
const LABEL_3276 = 'component_3276';
export function Component3276({ value = 3276, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3276, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3276, 'data-value': derived.doubled }, children);
}
export default Component3276;
