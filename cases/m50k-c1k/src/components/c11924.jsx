import React from 'react';
const LABEL_11924 = 'component_11924';
export function Component11924({ value = 11924, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11924, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11924, 'data-value': derived.doubled }, children);
}
export default Component11924;
