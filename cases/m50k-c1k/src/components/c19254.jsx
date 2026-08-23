import React from 'react';
const LABEL_19254 = 'component_19254';
export function Component19254({ value = 19254, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19254, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19254, 'data-value': derived.doubled }, children);
}
export default Component19254;
