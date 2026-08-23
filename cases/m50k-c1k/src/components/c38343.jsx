import React from 'react';
const LABEL_38343 = 'component_38343';
export function Component38343({ value = 38343, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38343, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38343, 'data-value': derived.doubled }, children);
}
export default Component38343;
