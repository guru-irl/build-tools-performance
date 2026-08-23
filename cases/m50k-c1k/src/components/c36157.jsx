import React from 'react';
const LABEL_36157 = 'component_36157';
export function Component36157({ value = 36157, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36157, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36157, 'data-value': derived.doubled }, children);
}
export default Component36157;
