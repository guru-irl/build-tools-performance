import React from 'react';
const LABEL_19409 = 'component_19409';
export function Component19409({ value = 19409, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19409, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19409, 'data-value': derived.doubled }, children);
}
export default Component19409;
