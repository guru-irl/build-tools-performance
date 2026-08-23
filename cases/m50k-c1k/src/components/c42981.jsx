import React from 'react';
const LABEL_42981 = 'component_42981';
export function Component42981({ value = 42981, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42981, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42981, 'data-value': derived.doubled }, children);
}
export default Component42981;
