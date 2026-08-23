import React from 'react';
const LABEL_7766 = 'component_7766';
export function Component7766({ value = 7766, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7766, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7766, 'data-value': derived.doubled }, children);
}
export default Component7766;
