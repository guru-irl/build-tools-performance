import React from 'react';
const LABEL_2012 = 'component_2012';
export function Component2012({ value = 2012, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2012, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2012, 'data-value': derived.doubled }, children);
}
export default Component2012;
