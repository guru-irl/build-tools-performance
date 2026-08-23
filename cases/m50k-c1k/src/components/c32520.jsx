import React from 'react';
const LABEL_32520 = 'component_32520';
export function Component32520({ value = 32520, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32520, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32520, 'data-value': derived.doubled }, children);
}
export default Component32520;
