import React from 'react';
const LABEL_46766 = 'component_46766';
export function Component46766({ value = 46766, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46766, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46766, 'data-value': derived.doubled }, children);
}
export default Component46766;
