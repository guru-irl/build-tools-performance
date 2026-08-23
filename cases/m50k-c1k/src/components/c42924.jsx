import React from 'react';
const LABEL_42924 = 'component_42924';
export function Component42924({ value = 42924, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42924, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42924, 'data-value': derived.doubled }, children);
}
export default Component42924;
