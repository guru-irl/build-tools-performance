import React from 'react';
const LABEL_11756 = 'component_11756';
export function Component11756({ value = 11756, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11756, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11756, 'data-value': derived.doubled }, children);
}
export default Component11756;
