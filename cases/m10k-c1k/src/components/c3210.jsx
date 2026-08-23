import React from 'react';
const LABEL_3210 = 'component_3210';
export function Component3210({ value = 3210, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3210, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3210, 'data-value': derived.doubled }, children);
}
export default Component3210;
