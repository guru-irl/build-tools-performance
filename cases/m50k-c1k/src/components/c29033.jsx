import React from 'react';
const LABEL_29033 = 'component_29033';
export function Component29033({ value = 29033, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29033, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29033, 'data-value': derived.doubled }, children);
}
export default Component29033;
