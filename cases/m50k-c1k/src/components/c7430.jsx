import React from 'react';
const LABEL_7430 = 'component_7430';
export function Component7430({ value = 7430, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7430, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7430, 'data-value': derived.doubled }, children);
}
export default Component7430;
