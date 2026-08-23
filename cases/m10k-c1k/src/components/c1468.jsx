import React from 'react';
const LABEL_1468 = 'component_1468';
export function Component1468({ value = 1468, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1468, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1468, 'data-value': derived.doubled }, children);
}
export default Component1468;
