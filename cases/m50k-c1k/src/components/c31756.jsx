import React from 'react';
const LABEL_31756 = 'component_31756';
export function Component31756({ value = 31756, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31756, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31756, 'data-value': derived.doubled }, children);
}
export default Component31756;
