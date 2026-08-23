import React from 'react';
const LABEL_46777 = 'component_46777';
export function Component46777({ value = 46777, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46777, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46777, 'data-value': derived.doubled }, children);
}
export default Component46777;
