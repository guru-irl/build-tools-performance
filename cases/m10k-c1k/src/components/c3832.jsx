import React from 'react';
const LABEL_3832 = 'component_3832';
export function Component3832({ value = 3832, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3832, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3832, 'data-value': derived.doubled }, children);
}
export default Component3832;
