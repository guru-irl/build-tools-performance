import React from 'react';
const LABEL_14508 = 'component_14508';
export function Component14508({ value = 14508, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14508, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14508, 'data-value': derived.doubled }, children);
}
export default Component14508;
