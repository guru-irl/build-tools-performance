import React from 'react';
const LABEL_14680 = 'component_14680';
export function Component14680({ value = 14680, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14680, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14680, 'data-value': derived.doubled }, children);
}
export default Component14680;
