import React from 'react';
const LABEL_40680 = 'component_40680';
export function Component40680({ value = 40680, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40680, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40680, 'data-value': derived.doubled }, children);
}
export default Component40680;
