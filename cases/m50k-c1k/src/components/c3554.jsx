import React from 'react';
const LABEL_3554 = 'component_3554';
export function Component3554({ value = 3554, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3554, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3554, 'data-value': derived.doubled }, children);
}
export default Component3554;
