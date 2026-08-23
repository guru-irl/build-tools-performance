import React from 'react';
const LABEL_38469 = 'component_38469';
export function Component38469({ value = 38469, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38469, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38469, 'data-value': derived.doubled }, children);
}
export default Component38469;
