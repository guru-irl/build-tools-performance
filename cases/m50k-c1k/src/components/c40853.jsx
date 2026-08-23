import React from 'react';
const LABEL_40853 = 'component_40853';
export function Component40853({ value = 40853, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40853, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40853, 'data-value': derived.doubled }, children);
}
export default Component40853;
