import React from 'react';
const LABEL_37924 = 'component_37924';
export function Component37924({ value = 37924, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37924, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37924, 'data-value': derived.doubled }, children);
}
export default Component37924;
