import React from 'react';
const LABEL_42680 = 'component_42680';
export function Component42680({ value = 42680, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42680, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42680, 'data-value': derived.doubled }, children);
}
export default Component42680;
