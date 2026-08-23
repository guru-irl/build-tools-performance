import React from 'react';
const LABEL_6924 = 'component_6924';
export function Component6924({ value = 6924, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6924, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6924, 'data-value': derived.doubled }, children);
}
export default Component6924;
