import React from 'react';
const LABEL_3410 = 'component_3410';
export function Component3410({ value = 3410, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3410, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3410, 'data-value': derived.doubled }, children);
}
export default Component3410;
