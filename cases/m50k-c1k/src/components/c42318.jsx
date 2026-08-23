import React from 'react';
const LABEL_42318 = 'component_42318';
export function Component42318({ value = 42318, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42318, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42318, 'data-value': derived.doubled }, children);
}
export default Component42318;
