import React from 'react';
const LABEL_6680 = 'component_6680';
export function Component6680({ value = 6680, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6680, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6680, 'data-value': derived.doubled }, children);
}
export default Component6680;
