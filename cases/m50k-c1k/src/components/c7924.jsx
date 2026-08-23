import React from 'react';
const LABEL_7924 = 'component_7924';
export function Component7924({ value = 7924, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7924, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7924, 'data-value': derived.doubled }, children);
}
export default Component7924;
