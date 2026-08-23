import React from 'react';
const LABEL_1242 = 'component_1242';
export function Component1242({ value = 1242, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1242, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1242, 'data-value': derived.doubled }, children);
}
export default Component1242;
