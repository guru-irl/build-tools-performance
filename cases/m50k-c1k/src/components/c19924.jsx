import React from 'react';
const LABEL_19924 = 'component_19924';
export function Component19924({ value = 19924, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19924, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19924, 'data-value': derived.doubled }, children);
}
export default Component19924;
