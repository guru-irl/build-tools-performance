import React from 'react';
const LABEL_8680 = 'component_8680';
export function Component8680({ value = 8680, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8680, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8680, 'data-value': derived.doubled }, children);
}
export default Component8680;
