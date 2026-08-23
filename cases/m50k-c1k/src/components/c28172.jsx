import React from 'react';
const LABEL_28172 = 'component_28172';
export function Component28172({ value = 28172, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28172, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28172, 'data-value': derived.doubled }, children);
}
export default Component28172;
