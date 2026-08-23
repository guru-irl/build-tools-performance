import React from 'react';
const LABEL_32430 = 'component_32430';
export function Component32430({ value = 32430, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32430, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32430, 'data-value': derived.doubled }, children);
}
export default Component32430;
