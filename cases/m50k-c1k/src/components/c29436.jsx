import React from 'react';
const LABEL_29436 = 'component_29436';
export function Component29436({ value = 29436, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29436, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29436, 'data-value': derived.doubled }, children);
}
export default Component29436;
