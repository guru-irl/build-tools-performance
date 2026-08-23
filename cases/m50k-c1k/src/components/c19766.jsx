import React from 'react';
const LABEL_19766 = 'component_19766';
export function Component19766({ value = 19766, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19766, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19766, 'data-value': derived.doubled }, children);
}
export default Component19766;
