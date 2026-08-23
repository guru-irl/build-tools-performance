import React from 'react';
const LABEL_29792 = 'component_29792';
export function Component29792({ value = 29792, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29792, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29792, 'data-value': derived.doubled }, children);
}
export default Component29792;
