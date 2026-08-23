import React from 'react';
const LABEL_2006 = 'component_2006';
export function Component2006({ value = 2006, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2006, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2006, 'data-value': derived.doubled }, children);
}
export default Component2006;
