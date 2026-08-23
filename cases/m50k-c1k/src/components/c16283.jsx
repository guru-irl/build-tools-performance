import React from 'react';
const LABEL_16283 = 'component_16283';
export function Component16283({ value = 16283, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16283, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16283, 'data-value': derived.doubled }, children);
}
export default Component16283;
