import React from 'react';
const LABEL_42265 = 'component_42265';
export function Component42265({ value = 42265, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42265, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42265, 'data-value': derived.doubled }, children);
}
export default Component42265;
