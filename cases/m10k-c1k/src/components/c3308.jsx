import React from 'react';
const LABEL_3308 = 'component_3308';
export function Component3308({ value = 3308, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3308, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3308, 'data-value': derived.doubled }, children);
}
export default Component3308;
