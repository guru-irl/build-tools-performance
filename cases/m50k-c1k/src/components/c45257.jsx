import React from 'react';
const LABEL_45257 = 'component_45257';
export function Component45257({ value = 45257, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45257, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45257, 'data-value': derived.doubled }, children);
}
export default Component45257;
