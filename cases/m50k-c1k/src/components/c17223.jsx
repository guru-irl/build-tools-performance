import React from 'react';
const LABEL_17223 = 'component_17223';
export function Component17223({ value = 17223, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17223, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17223, 'data-value': derived.doubled }, children);
}
export default Component17223;
