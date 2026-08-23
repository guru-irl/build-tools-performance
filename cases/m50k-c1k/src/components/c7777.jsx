import React from 'react';
const LABEL_7777 = 'component_7777';
export function Component7777({ value = 7777, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7777, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7777, 'data-value': derived.doubled }, children);
}
export default Component7777;
