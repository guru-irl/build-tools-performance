import React from 'react';
const LABEL_45766 = 'component_45766';
export function Component45766({ value = 45766, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45766, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45766, 'data-value': derived.doubled }, children);
}
export default Component45766;
