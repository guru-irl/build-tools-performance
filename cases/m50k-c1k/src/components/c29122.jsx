import React from 'react';
const LABEL_29122 = 'component_29122';
export function Component29122({ value = 29122, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29122, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29122, 'data-value': derived.doubled }, children);
}
export default Component29122;
