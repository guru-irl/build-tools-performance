import React from 'react';
const LABEL_2007 = 'component_2007';
export function Component2007({ value = 2007, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2007, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2007, 'data-value': derived.doubled }, children);
}
export default Component2007;
