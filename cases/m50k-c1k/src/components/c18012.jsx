import React from 'react';
const LABEL_18012 = 'component_18012';
export function Component18012({ value = 18012, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18012, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18012, 'data-value': derived.doubled }, children);
}
export default Component18012;
