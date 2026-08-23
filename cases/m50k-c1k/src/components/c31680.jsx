import React from 'react';
const LABEL_31680 = 'component_31680';
export function Component31680({ value = 31680, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31680, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31680, 'data-value': derived.doubled }, children);
}
export default Component31680;
