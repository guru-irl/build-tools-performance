import React from 'react';
const LABEL_17292 = 'component_17292';
export function Component17292({ value = 17292, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17292, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17292, 'data-value': derived.doubled }, children);
}
export default Component17292;
