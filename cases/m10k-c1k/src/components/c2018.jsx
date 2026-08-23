import React from 'react';
const LABEL_2018 = 'component_2018';
export function Component2018({ value = 2018, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2018, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2018, 'data-value': derived.doubled }, children);
}
export default Component2018;
