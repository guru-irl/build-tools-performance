import React from 'react';
const LABEL_34012 = 'component_34012';
export function Component34012({ value = 34012, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34012, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34012, 'data-value': derived.doubled }, children);
}
export default Component34012;
