import React from 'react';
const LABEL_25924 = 'component_25924';
export function Component25924({ value = 25924, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_25924, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_25924, 'data-value': derived.doubled }, children);
}
export default Component25924;
