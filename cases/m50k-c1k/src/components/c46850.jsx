import React from 'react';
const LABEL_46850 = 'component_46850';
export function Component46850({ value = 46850, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46850, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46850, 'data-value': derived.doubled }, children);
}
export default Component46850;
