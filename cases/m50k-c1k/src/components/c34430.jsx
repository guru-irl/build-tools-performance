import React from 'react';
const LABEL_34430 = 'component_34430';
export function Component34430({ value = 34430, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34430, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34430, 'data-value': derived.doubled }, children);
}
export default Component34430;
