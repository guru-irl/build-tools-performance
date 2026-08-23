import React from 'react';
const LABEL_35430 = 'component_35430';
export function Component35430({ value = 35430, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35430, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35430, 'data-value': derived.doubled }, children);
}
export default Component35430;
