import React from 'react';
const LABEL_17386 = 'component_17386';
export function Component17386({ value = 17386, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17386, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17386, 'data-value': derived.doubled }, children);
}
export default Component17386;
