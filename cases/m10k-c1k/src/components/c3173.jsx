import React from 'react';
const LABEL_3173 = 'component_3173';
export function Component3173({ value = 3173, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3173, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3173, 'data-value': derived.doubled }, children);
}
export default Component3173;
