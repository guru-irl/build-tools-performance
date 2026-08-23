import React from 'react';
const LABEL_32871 = 'component_32871';
export function Component32871({ value = 32871, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32871, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32871, 'data-value': derived.doubled }, children);
}
export default Component32871;
