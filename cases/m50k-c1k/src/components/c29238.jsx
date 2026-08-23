import React from 'react';
const LABEL_29238 = 'component_29238';
export function Component29238({ value = 29238, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29238, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29238, 'data-value': derived.doubled }, children);
}
export default Component29238;
