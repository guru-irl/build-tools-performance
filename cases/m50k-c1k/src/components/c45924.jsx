import React from 'react';
const LABEL_45924 = 'component_45924';
export function Component45924({ value = 45924, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45924, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45924, 'data-value': derived.doubled }, children);
}
export default Component45924;
