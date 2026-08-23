import React from 'react';
const LABEL_29298 = 'component_29298';
export function Component29298({ value = 29298, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29298, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29298, 'data-value': derived.doubled }, children);
}
export default Component29298;
