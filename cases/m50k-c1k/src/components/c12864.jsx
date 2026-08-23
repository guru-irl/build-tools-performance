import React from 'react';
const LABEL_12864 = 'component_12864';
export function Component12864({ value = 12864, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12864, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12864, 'data-value': derived.doubled }, children);
}
export default Component12864;
