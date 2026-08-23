import React from 'react';
const LABEL_30465 = 'component_30465';
export function Component30465({ value = 30465, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30465, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30465, 'data-value': derived.doubled }, children);
}
export default Component30465;
