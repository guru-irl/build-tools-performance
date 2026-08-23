import React from 'react';
const LABEL_37766 = 'component_37766';
export function Component37766({ value = 37766, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37766, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37766, 'data-value': derived.doubled }, children);
}
export default Component37766;
