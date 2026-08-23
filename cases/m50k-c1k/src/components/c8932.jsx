import React from 'react';
const LABEL_8932 = 'component_8932';
export function Component8932({ value = 8932, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8932, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8932, 'data-value': derived.doubled }, children);
}
export default Component8932;
