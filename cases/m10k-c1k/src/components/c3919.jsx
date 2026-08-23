import React from 'react';
const LABEL_3919 = 'component_3919';
export function Component3919({ value = 3919, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3919, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3919, 'data-value': derived.doubled }, children);
}
export default Component3919;
