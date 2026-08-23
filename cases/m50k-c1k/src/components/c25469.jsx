import React from 'react';
const LABEL_25469 = 'component_25469';
export function Component25469({ value = 25469, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25469, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25469, 'data-value': derived.doubled }, children);
}
export default Component25469;
