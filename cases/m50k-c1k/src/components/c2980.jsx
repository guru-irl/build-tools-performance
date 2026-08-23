import React from 'react';
const LABEL_2980 = 'component_2980';
export function Component2980({ value = 2980, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2980, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2980, 'data-value': derived.doubled }, children);
}
export default Component2980;
