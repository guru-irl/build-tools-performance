import React from 'react';
const LABEL_3301 = 'component_3301';
export function Component3301({ value = 3301, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3301, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3301, 'data-value': derived.doubled }, children);
}
export default Component3301;
