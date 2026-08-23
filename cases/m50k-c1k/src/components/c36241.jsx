import React from 'react';
const LABEL_36241 = 'component_36241';
export function Component36241({ value = 36241, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36241, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36241, 'data-value': derived.doubled }, children);
}
export default Component36241;
