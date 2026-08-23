import React from 'react';
const LABEL_45070 = 'component_45070';
export function Component45070({ value = 45070, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45070, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45070, 'data-value': derived.doubled }, children);
}
export default Component45070;
