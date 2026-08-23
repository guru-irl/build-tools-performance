import React from 'react';
const LABEL_2290 = 'component_2290';
export function Component2290({ value = 2290, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2290, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2290, 'data-value': derived.doubled }, children);
}
export default Component2290;
