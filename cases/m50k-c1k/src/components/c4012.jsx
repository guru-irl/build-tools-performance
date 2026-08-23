import React from 'react';
const LABEL_4012 = 'component_4012';
export function Component4012({ value = 4012, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4012, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4012, 'data-value': derived.doubled }, children);
}
export default Component4012;
