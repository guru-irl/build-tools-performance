import React from 'react';
const LABEL_6249 = 'component_6249';
export function Component6249({ value = 6249, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6249, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6249, 'data-value': derived.doubled }, children);
}
export default Component6249;
