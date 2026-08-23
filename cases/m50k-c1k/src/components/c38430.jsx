import React from 'react';
const LABEL_38430 = 'component_38430';
export function Component38430({ value = 38430, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38430, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38430, 'data-value': derived.doubled }, children);
}
export default Component38430;
