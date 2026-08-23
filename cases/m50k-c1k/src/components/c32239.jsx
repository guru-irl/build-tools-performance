import React from 'react';
const LABEL_32239 = 'component_32239';
export function Component32239({ value = 32239, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32239, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32239, 'data-value': derived.doubled }, children);
}
export default Component32239;
