import React from 'react';
const LABEL_46048 = 'component_46048';
export function Component46048({ value = 46048, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46048, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46048, 'data-value': derived.doubled }, children);
}
export default Component46048;
