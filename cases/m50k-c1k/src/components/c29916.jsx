import React from 'react';
const LABEL_29916 = 'component_29916';
export function Component29916({ value = 29916, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29916, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29916, 'data-value': derived.doubled }, children);
}
export default Component29916;
