import React from 'react';
const LABEL_32574 = 'component_32574';
export function Component32574({ value = 32574, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32574, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32574, 'data-value': derived.doubled }, children);
}
export default Component32574;
