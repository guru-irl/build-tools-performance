import React from 'react';
const LABEL_8646 = 'component_8646';
export function Component8646({ value = 8646, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8646, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8646, 'data-value': derived.doubled }, children);
}
export default Component8646;
