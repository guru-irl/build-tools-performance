import React from 'react';
const LABEL_37893 = 'component_37893';
export function Component37893({ value = 37893, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37893, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37893, 'data-value': derived.doubled }, children);
}
export default Component37893;
