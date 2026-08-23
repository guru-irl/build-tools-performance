import React from 'react';
const LABEL_3930 = 'component_3930';
export function Component3930({ value = 3930, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3930, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3930, 'data-value': derived.doubled }, children);
}
export default Component3930;
