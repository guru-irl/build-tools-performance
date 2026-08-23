import React from 'react';
const LABEL_1712 = 'component_1712';
export function Component1712({ value = 1712, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1712, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1712, 'data-value': derived.doubled }, children);
}
export default Component1712;
