import React from 'react';
const LABEL_3419 = 'component_3419';
export function Component3419({ value = 3419, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3419, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3419, 'data-value': derived.doubled }, children);
}
export default Component3419;
