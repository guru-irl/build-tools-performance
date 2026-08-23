import React from 'react';
const LABEL_1680 = 'component_1680';
export function Component1680({ value = 1680, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1680, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1680, 'data-value': derived.doubled }, children);
}
export default Component1680;
