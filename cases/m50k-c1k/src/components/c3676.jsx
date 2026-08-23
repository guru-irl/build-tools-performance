import React from 'react';
const LABEL_3676 = 'component_3676';
export function Component3676({ value = 3676, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3676, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3676, 'data-value': derived.doubled }, children);
}
export default Component3676;
