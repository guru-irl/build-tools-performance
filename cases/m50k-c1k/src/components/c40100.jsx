import React from 'react';
const LABEL_40100 = 'component_40100';
export function Component40100({ value = 40100, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40100, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40100, 'data-value': derived.doubled }, children);
}
export default Component40100;
