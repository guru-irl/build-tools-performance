import React from 'react';
const LABEL_40924 = 'component_40924';
export function Component40924({ value = 40924, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40924, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40924, 'data-value': derived.doubled }, children);
}
export default Component40924;
