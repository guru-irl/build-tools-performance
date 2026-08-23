import React from 'react';
const LABEL_7075 = 'component_7075';
export function Component7075({ value = 7075, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7075, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7075, 'data-value': derived.doubled }, children);
}
export default Component7075;
