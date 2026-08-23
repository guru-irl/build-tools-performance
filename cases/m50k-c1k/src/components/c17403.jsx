import React from 'react';
const LABEL_17403 = 'component_17403';
export function Component17403({ value = 17403, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17403, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17403, 'data-value': derived.doubled }, children);
}
export default Component17403;
