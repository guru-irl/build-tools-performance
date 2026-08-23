import React from 'react';
const LABEL_3110 = 'component_3110';
export function Component3110({ value = 3110, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3110, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3110, 'data-value': derived.doubled }, children);
}
export default Component3110;
