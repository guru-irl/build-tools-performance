import React from 'react';
const LABEL_29732 = 'component_29732';
export function Component29732({ value = 29732, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29732, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29732, 'data-value': derived.doubled }, children);
}
export default Component29732;
