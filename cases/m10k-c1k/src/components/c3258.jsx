import React from 'react';
const LABEL_3258 = 'component_3258';
export function Component3258({ value = 3258, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3258, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3258, 'data-value': derived.doubled }, children);
}
export default Component3258;
